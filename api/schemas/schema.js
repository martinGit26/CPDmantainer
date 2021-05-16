import {gql} from 'apollo-server-express'

const schemas = gql`{
    type login {
        token: string
    }

    type user {
        name: string, 
        apellido: string, 
        username: string, 
        groups: [string]
    }

    type UserInput {
        username: string, 
        password: string,
        name: string, 
        apellido: string, 
        groups: [string]
    }

    type Query {
        login(user: Userinput) : string, 
        sigin(user: UserInput): User, 
        get_user(token: string): User
    }
}`