import { Router } from 'express'
import createUser from './controllers/create-user'
import getAllUser from './controllers/get-all'

export default (() => {
  const path = '/users'
  const router = Router()

  // GET
  router.get(`${path}`, getAllUser)

  // POST
  router.post(`${path}`, createUser)

  return {
    path,
    router,
  }
})()
