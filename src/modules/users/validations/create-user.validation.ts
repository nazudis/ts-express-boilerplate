import * as yup from 'yup'
import validate from '@common/validations/validate'
import { CreateUserDto } from '../dto/create-user.dto'

export default async function createUserValidaton(data: CreateUserDto): Promise<CreateUserDto> {
  const schema = yup.object().shape({
    email: yup.string().lowercase().email('Please insert a valid email').required('Please insert an email'),
    password: yup.string().min(6, 'Please insert with min 6 character').required('Please insert an password'),
  })
  const value = await validate<CreateUserDto>(schema, data)
  return value
}
