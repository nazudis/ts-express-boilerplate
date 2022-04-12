import * as yup from 'yup'

export const EmailPasswordSchema = yup.object().shape({
  email: yup.string().lowercase().email('Please insert a valid email').required('Please insert an email'),
  password: yup.string().min(6, 'Please insert with min 6 character').required('Please insert an password'),
})
