import UserRepository from '@modules/users/repository/user.repository'
import User from '../entity/user.entity'

export async function findAll(): Promise<User[]> {
  const users = await UserRepository.find()
  return users
}
