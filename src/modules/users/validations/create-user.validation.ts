import validate from '@common/validations/validate'
import { CreateUserDto } from '../dto/create-user.dto'
import { EmailPasswordSchema } from '@common/validations/schema'

export default async function createUserValidaton(data: CreateUserDto): Promise<CreateUserDto> {
  const schema = EmailPasswordSchema
  const value = await validate<CreateUserDto>(schema, data)
  return value
}
