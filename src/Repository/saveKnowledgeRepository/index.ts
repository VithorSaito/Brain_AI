import { database } from "../../lib/prisma";
import { SaveKnowledgeRepository } from "./saveKnowledge.repository";

export const saveKnowledgeRepository = new SaveKnowledgeRepository(database)