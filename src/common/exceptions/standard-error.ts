import { NextFunction, Request, Response } from 'express'

class HttpException extends Error {
  status: number
  message: string

  constructor(message: string, statusCode: number) {
    super(message)
    this.message = message
    this.status = statusCode
  }
}

function genericError(error: HttpException, req: Request, res: Response, next: NextFunction) {
  try {
    const status = error.status || 500
    const message = error.message || 'Something went wrong'

    console.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`)
    res.status(status).json({ status, message })
  } catch (err) {
    next(err)
  }
}

export { HttpException, genericError }
