import { gql } from '@apollo/client'

const LoginMutation = gql`
  mutation Login($email: String, $password: String) {
    Auth {
      Login(in: { email: $email, password: $password }) {
        isSuccess
        message
        status
        data {
          token
          userData {
            id
            role
            email
            name
            createdAt
          }
        }
      }
    }
  }
`

export { LoginMutation }
