import App from '@/app'
import UsersRoutes from '@modules/users/routes'
import AuthRoutes from '@modules/auth/routes'
import validateEnv from '@utils/validate-env'

validateEnv()

const app = new App([UsersRoutes, AuthRoutes])

app.listen()
