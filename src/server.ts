import App from '@/app'
import UsersRoutes from '@modules/users/routes'
import validateEnv from '@utils/validate-env'

validateEnv()

const app = new App([UsersRoutes])

app.listen()
