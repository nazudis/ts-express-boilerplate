// import { SECRET_KEY } from '@config'
import { sign, verify } from 'jsonwebtoken'

export function jwtSign(payload: any, expiresIn = '1D'): string {
  const accessToken = sign(payload, 'SECRET_KEY', { algorithm: 'HS512', expiresIn })
  return accessToken
}

export function jwtVerify(token: string): any {
  const decoded = verify(token, 'SECRET_KEY', { algorithms: ['HS512'] })
  return decoded
}
jwtSign({ akmal: 'true' })
