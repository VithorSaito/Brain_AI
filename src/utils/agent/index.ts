import { Agent } from "./agent";
import { openai } from "../../lib/openai";

export const agent = new Agent(openai)
