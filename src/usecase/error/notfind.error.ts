export default class NotFindError extends Error {
  public status: number
  
  constructor (message: string) {
    super(message)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.status = 404
  }

  statusCode() {
    return this.status
  }
}
