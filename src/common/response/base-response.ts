export default class BaseResponse<T> {
  status: number
  message: string
  data: T | Array<T>

  constructor(message: string, data: T | T[], statusCode?: number) {
    this.message = message
    this.data = data
    this.status = statusCode || 200
  }
}
