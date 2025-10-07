import { CalledUseCase } from "./calledUsecases";
import { prismaInstance } from "../../lib/prisma";

export const calledUseCase = new CalledUseCase(prismaInstance)