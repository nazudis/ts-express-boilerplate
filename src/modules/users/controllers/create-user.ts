import { NextFunction, Request, Response } from 'express'
import BaseResponse from '@common/response/base-response'
import User from '../entity/user.entity'
import * as userServices from '../services/user.service'
import createUserValidaton from '../validations/create-user.validation'

export default async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const value = await createUserValidaton(req.body)
    await userServices.checkUniqueEmail(value.email)

    const user = await userServices.create(value)

    res.json(new BaseResponse<User>('Success create user', user))
  } catch (err) {
    next(err)
  }
}
