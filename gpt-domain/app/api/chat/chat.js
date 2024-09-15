import { ModelFusionTextStream, asChatMessages } from "@modelfusion/vercel-ai";
import { Message, StreamingTextResponse } from "ai";
import { llamacpp, streamText } from "modelfusion";


export async function POST(req: Request) {
    // useChat will send a JSON with a messages property:
    const { messages }: { messages: Message[] } = await req.json();
  
    // ...
  }

export const runtime = "edge";