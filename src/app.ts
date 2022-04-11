import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { Routes } from '@common/interfaces/routes.interface'
import { CREDENTIALS, LOG_FORMAT, NODE_ENV, ORIGIN, PORT } from '@config'
import { AppDataSource } from './databases'
import { genericError } from '@common/exceptions/standard-error'
import apiKeyMiddleware from '@middlewares/apikey.middleware'

export default class App {
  public app: express.Application
  public env: string
  public port: string | number

  constructor(routes?: Routes[]) {
    this.app = express()
    this.env = NODE_ENV || 'development'
    this.port = PORT || 3000

    this.env !== 'test' && this.connectToDatabase()
    this.initializeMiddlewares()
    this.initializeRoutes(routes)
    this.initializeErrorMiddlerware()
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`||=============================================||`)
      console.info(`||            ENV: ${this.env}                 ||`)
      console.info(`||     🚀 App listening on the port ${this.port}🚀     ||`)
      console.info(`||=============================================||`)
    })
  }

  private async connectToDatabase() {
    AppDataSource.initialize()
      .then(() => {
        console.info('Success to connect database')
      })
      .catch(err => {
        console.error('Failed to connect database')
        console.error(err)
      })
  }

  private initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT))
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }))
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(apiKeyMiddleware)
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/api', route.router)
    })
  }

  private initializeErrorMiddlerware() {
    this.app.use(genericError)
  }
}
