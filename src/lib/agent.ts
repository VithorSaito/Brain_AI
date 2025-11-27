import { Agent } from "../utils/agent";
import { openai } from "./openai";

export const agent = new Agent(openai)
