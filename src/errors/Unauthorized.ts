import { ApiError } from "./ApiError";

export class Unauthorized extends ApiError {
  constructor(message: string) {
    super("401", message);
  }
}