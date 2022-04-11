import { HttpException } from '@common/exceptions/standard-error'
import { API_KEY } from '@config'
import { NextFunction, Request, Response } from 'express'

export default function apiKeyMiddleware(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers['api-key']
  if (!apiKey) throw new HttpException('Forbidden. API KEY required', 403)

  if (API_KEY !== apiKey) throw new HttpException('Forbidden. API KEY doesnt match', 403)

  return next()
}
