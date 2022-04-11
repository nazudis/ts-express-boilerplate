import Pagination from '../interfaces/pagination.interface'
import BaseResponse from './base-response'

export default class PaginationResponse<T> extends BaseResponse<T> {
  pagination: Pagination
  constructor(message: string, data: T[], pagination: Pagination, statusCode?: number) {
    super(message, data, statusCode)
    this.pagination = pagination
  }
}
