import { AnySchema } from 'yup'
import { HttpException } from '@common/exceptions/standard-error'

export default async function validate<T>(schema: AnySchema, data: T): Promise<T> {
  try {
    const value = await schema.validate(data, { stripUnknown: true })
    return value
  } catch (err) {
    throw new HttpException(err.message, 400)
  }
}
