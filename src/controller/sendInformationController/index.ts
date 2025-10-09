import { sendInformationUseCase } from "../../usecases/sendInformationUseCase";
import { SendInformationController } from "./sendInformation";

export const sendInformationController = new SendInformationController(sendInformationUseCase)