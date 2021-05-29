import {gql} from 'graphql-tag'

const schemas = gql`
    type User {
        name: String
        apellido: String 
        username: String 
        groups: String
    }

    input UserInput {
        username: String 
        password: String
        name: String 
        apellido: String 
        groups: String
    }

    type Query {
        login(user: UserInput) : String 
        sigin(user: UserInput) : User
        get_user(token: String) : User
    }
`;

export default schemas