import { AppDataSource } from '@databases'
import User from '../entity/user.entity'

const UserRepository = AppDataSource.getRepository(User)

export default UserRepository
