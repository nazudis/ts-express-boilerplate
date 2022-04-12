import validate from '@common/validations/validate'
import { LoginDto } from '../dto/login.dto'
import { EmailPasswordSchema } from '@/common/validations/schema'

export default async function loginValidation(data: LoginDto): Promise<LoginDto> {
  const schema = EmailPasswordSchema
  const value = await validate<LoginDto>(schema, data)
  return value
}
