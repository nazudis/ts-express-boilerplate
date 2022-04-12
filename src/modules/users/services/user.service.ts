import { HttpException } from '@/common/exceptions/standard-error'
import { hashString } from '@utils/hash-string'
import UserRepository from '@modules/users/repository/user.repository'
import { CreateUserDto } from '../dto/create-user.dto'
import User from '../entity/user.entity'

export async function findAll(): Promise<User[]> {
  const users = await UserRepository.find()
  return users
}

export async function checkUniqueEmail(email: string): Promise<void> {
  const isExists = await UserRepository.findOne({ where: { email } })
  if (isExists) throw new HttpException('Email has been used', 422)
}

export async function create(data: CreateUserDto): Promise<User> {
  data.password = hashString(data.password)
  const user = UserRepository.create(data)
  await user.save().catch(err => new HttpException(err.message, 422))
  return user
}

export async function findUserWithEmail(email: string): Promise<User> {
  const user = await UserRepository.findOne({ where: { email } })
  if (!user) throw new HttpException('User not found', 404)

  return user
}
