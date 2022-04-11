import { NextFunction, Response } from 'express'
import RequestWithUser from '@/common/interfaces/request-with-user'
import BaseResponse from '@/common/response/base-response'
import User from '../entity/user.entity'
import * as userServices from '../services/user.service'

export default async function getAllUser(_: RequestWithUser, res: Response, next: NextFunction) {
  try {
    const user = await userServices.findAll()
    res.json(new BaseResponse<User[]>('Success', user))
  } catch (error) {
    next(error)
  }
}
