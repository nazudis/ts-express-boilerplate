import { LoginDto } from '../dto/login.dto'
import * as userServices from '@modules/users/services/user.service'
import { compareHash } from '@/utils/hash-string'
import { HttpException } from '@/common/exceptions/standard-error'

export async function validateLogin(loginDto: LoginDto) {
  const user = await userServices.findUserWithEmail(loginDto.email).catch(err => {
    if (err.status === 404) throw new HttpException(`Email does'nt exists`, 401)
    throw err
  })
  const isMatch = compareHash(loginDto.password, user.password)
  if (isMatch) return user
  throw new HttpException(`Password does'nt match`, 401)
}
