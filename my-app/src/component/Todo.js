import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

    const [showModal, setModalIsOpen] = useState(false);
    

function deleteHandler() {
    console.log("Clicked", props.text);
    setModalIsOpen(true);
}

function cancelHandler() {
  setModalIsOpen(false);
}

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {showModal ? <Modal onClick={cancelHandler}/> : null }
      {showModal ? <Backdrop onClick={cancelHandler}/> : null }
    </div>
  );
}

export default Todo;
