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
    const statusCode = error.status || 500
    const message = error.message || 'Something went wrong'

    console.error(`[${req.method}] ${req.path} >> StatusCode:: ${statusCode}, Message:: ${message}`)
    res.status(statusCode).json({ statusCode, message })
  } catch (err) {
    next(err)
  }
}

export { HttpException, genericError }
