import { ApiError } from "./ApiError";

export class BadRequest extends ApiError {
  constructor(message: string) {
    super("400", message);
  }
}