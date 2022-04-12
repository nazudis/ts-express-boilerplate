import { NextFunction, Request, Response } from 'express'
import BaseResponse from '@common/response/base-response'
import * as authServices from '../services/auth.service'
import loginValidation from '../validations/login.validation'
import { jwtSign } from '@utils/token'
import AccessToken from '@common/interfaces/access-token.interface'

export async function loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const value = await loginValidation(req.body)
    const user = await authServices.validateLogin(value)
    const payload = { id: user.id, email: user.email }
    const token: AccessToken = {
      accessToken: jwtSign(payload),
      refreshToken: jwtSign(payload, '1Y'),
    }

    res.json(new BaseResponse<AccessToken>('Success login.', token))
  } catch (err) {
    next(err)
  }
}
