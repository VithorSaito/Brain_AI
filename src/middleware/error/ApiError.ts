export class ApiError extends Error {
  public statusCode: string
  public message: string

  constructor(statusCode: string, message: string) {
    super(message)
    this.statusCode = statusCode
    this.message = message
  }
}