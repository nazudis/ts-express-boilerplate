import { Request } from 'express'
import DecodedToken from '@common/interfaces/docoded-token.interface'

export default interface RequestWithUser extends Request {
  user: DecodedToken
}
