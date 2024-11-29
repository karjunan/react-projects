import azure.functions as func
import logging
import requests
import json
from openai import AzureOpenAI
from azure.core.credentials import AzureKeyCredential  
from azure.search.documents import SearchClient 
import os
import time

## Configure environment variables.
openai_api_key = os.environ.get("OPENAI_API_KEY") or " "
openai_api_base = os.environ.get("OPENAI_API_BASE")  or " "
openai_api_version = os.environ.get("OPENAI_API_VERSION") or " "
openai_deployment = os.environ.get("OPENAI_DEPLOYMENT_EMBEDDING") or " "
service_endpoint = os.environ.get("AZURE_SEARCH_SERVICE_ENDPOINT") or " "
search_key = os.environ.get("AZURE_SEARCH_ADMIN_KEY") or " "
index_name = os.environ.get("AZURE_SEARCH_INDEX_NAME") or " "

# Function to generate embeddings
client = AzureOpenAI(
api_key = openai_api_key,  
api_version = openai_api_version,  
azure_endpoint = openai_api_base)

def generate_embeddings(text, model=openai_deployment):
    try:
        return client.embeddings.create(input = [text], model=model).data[0].embedding 
    except:
        return []
    
#### Helper functions ###
def getcoord(i,prop_data):
    try: 
        lat,long = map(float, prop_data[i]['location'][:2])
        lat,long = round(lat,6), round(long,6)
    except:
        lat,long = 0,0
    GeoLocation = {"type": "Point", "coordinates": [lat,long], "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}}
    return GeoLocation

def getdscp(i,prop_data):
    unit_info = prop_data[i]
    description = (
        f"{unit_info['projectName']} offers a {unit_info['bedrooms']}-bedroom {unit_info['unitType']} with a "
        f"{unit_info['unitView']} on the {unit_info['floor']}. This unit spans {unit_info['saleableArea']} square feet, "
        f"with a selling price of {unit_info['currency']} {int(unit_info['sellingPrice']):,}. Completion is expected by "
        f"{unit_info['completionDate']}. There are {unit_info['availableUnits']} available units in this development, "
        f"with sizes ranging from {unit_info['unitSizeRange'][0]} to {unit_info['unitSizeRange'][1]} square feet."
    )
    return description

def getTag(i,prop_data):
    taglst = [ prop_data[i]['unitView'], prop_data[i]['projectName'], prop_data[i]['unitType'], prop_data[i]['floor'] ]
    taglst = [x for x in taglst if x is not None]
    return taglst

def get_payment_plan(i,prop_data):
    try:
        pay_url = f"https://searchservice.properties.aldar.com/api/search/property/payment-plans/{prop_data[i]['propertyId']}"
        resp_p = requests.get(pay_url)
        res_json_p = resp_p.json()
        pay_data = res_json_p['data']['paymentPlans'][0]['installments']
        pay_txt = f"\n\nPayment Plan: \n1) {pay_data[0]['paymentPercent']}% as {pay_data[0]['progression']} on the {pay_data[0]['milestone']}. \n2) {pay_data[1]['paymentPercent']}% as {pay_data[1]['progression']} {pay_data[1]['milestone']}. \n3) {pay_data[2]['paymentPercent']}% as {pay_data[2]['progression']} after {pay_data[2]['milestone']}." 
        return pay_txt
    except:
        return " "

## Function for updating url data to search index.
def get_embeddings():
    ## Load properties data from api
    prop_url = 'https://searchservice.properties.aldar.com/api/search/property'
    resp = requests.get(prop_url)
    res_json = resp.json()
    prop_data = res_json['data']['properties']

    input_data= []
    for i in range(len(prop_data)):
        d = {}
        try:
            d['id'] = f"{i}"
            d['Website'] = f"https://www.aldar.com/properties/units/{prop_data[i]['propertyId']}"
            d['GeoLocation'] = getcoord(i,prop_data)
            d['Category'] = 'Properties'
            d['SubCategory'] = prop_data[i]['unitView']
            d['Description'] = getdscp(i,prop_data) + get_payment_plan(i,prop_data)
            d['Name'] = prop_data[i]['projectName']
            d['Contact_Number'] = "800-25327"
            d['Tags'] = getTag(i,prop_data)
            d['Location'] = prop_data[i]['location'][2]
            d['Information'] = f"Available units:{prop_data[i]['availableUnits']}"
            # d['Details'] = get_payment_plan(i,prop_data)
            d['Email'] = "customercare@aldar.com"
            d['vectorEmbedding'] = generate_embeddings(getdscp(i,prop_data))
            input_data.append(d)
        except Exception as e:
            logging.info(f'Error in get embeddings {e}')
            pass
    
    # Output embeddings to .json format.
    documents = json.dumps(input_data)
    documents = json.loads(documents)
    return documents

def upload_index_records(documents):
    ## Upload documents to search index.
    credential = AzureKeyCredential(search_key)
    search_client = SearchClient(endpoint=service_endpoint, index_name=index_name, credential=credential)
    search_client.upload_documents(documents=documents)
    
    return f"{index_name} Index updated successfully..."

def delete_index_records():
    credential = AzureKeyCredential(search_key)
    search_client = SearchClient(endpoint=service_endpoint, index_name=index_name, credential=credential)
    doc_id = search_client.search(search_text="*", select='id')

    ids  = []
    for id in list(doc_id):
            ids.append(id['id']) 
            
    delete_actions = [{"@search.action": "delete", "id": doc_id} for doc_id in ids]
    search_client.upload_documents(documents=delete_actions)


####### Function app ######
app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

## Time trigger function app. Trigger time set to every 3 hours.
@app.timer_trigger(schedule="0 0 */3 * * *", arg_name="myTimer", run_on_startup=True,
                use_monitor=False) 
def timer_trigger(myTimer: func.TimerRequest) -> None:
    
    if myTimer.past_due:
        logging.info('The timer is past due!')
    logging.info('Python timer trigger function executed.')
    
    documents = []
    ## Create embeddings.
    try:
        documents = get_embeddings()
        status = f"Embedding Status: Number of documents embedded {len(documents)}"
        logging.info(status)
    except Exception as e:
        logging.info(f"Embedding status: {e}")
    
    if len(documents) > 0:
        ## Delete previous records.
        try:
            delete_index_records()
            logging.info(f"Previous properties records deleted.")
        except Exception as e:
            logging.info(f"Deleting properties records status: {e}")
        
        ## Upload docs to indexing.
        time.sleep(2)
        try:
            res = upload_index_records(documents)
            status = f"Upload docs Status: {res}"
            logging.info(status)
        except Exception as e:
            logging.info(f"Upload docs Status: {e}")
    else:
        logging.info(f"Document length is zero. Index is not updated.")

        
## HTTP trigger function to update index.
@app.function_name(name="update_properties")
@app.route(route="update_properties", auth_level=func.AuthLevel.ANONYMOUS)
def test_function(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    documents = []
    ## Create embeddings.
    try:
        documents = get_embeddings()
        status = f"Embedding Status: Number of documents embedded {len(documents)}"
        logging.info(status)
    except Exception as e:
        logging.info(f"Embedding status: {e}")
        
        
    if len(documents) > 0:
        ## Delete previous records.
        try:
            delete_index_records()
            logging.info(f"Previous properties records deleted.")
        except Exception as e:
            logging.info(f"Deleting properties records status: {e}")
        
        ## Upload docs to indexing.
        time.sleep(2)
        try:
            res = upload_index_records(documents)
            status = f"Upload docs Status: {res}"
            logging.info(status)
        except Exception as e:
            logging.info(f"Upload docs Status: {e}")
        
        return func.HttpResponse(
            "Api Wrapper function executed successfully. Properties index updated",
            status_code=200
            )
    else:
        logging.info(f"Document length is zero. Index is not updated.")
        return func.HttpResponse(
            "Document length is zero. Index is not updated.",
            status_code=200
            )
        
