import { database } from "../../lib/prisma";
import { CosineSimilarityRepository } from "./consineSimilarity.repository";

export const cosineSimilarityRepository = new CosineSimilarityRepository(database)