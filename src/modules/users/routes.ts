import { Router } from 'express'
import getAllUser from './controllers/get-all'

export default (() => {
  const path = '/users'
  const router = Router()

  router.get(`${path}`, getAllUser)

  return {
    path,
    router,
  }
})()
