import { Router } from 'express'
import { loginUser } from './controllers/login'

export default (() => {
  const path = '/auth'
  const router = Router()

  // POST
  router.post(`${path}/users/login`, loginUser)

  return {
    path,
    router,
  }
})()
