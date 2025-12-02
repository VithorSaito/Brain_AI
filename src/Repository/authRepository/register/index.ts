import { database } from "../../../lib/prisma";
import { RegisterRepository } from "./register.repository";

export const registerRepository = new RegisterRepository(database)