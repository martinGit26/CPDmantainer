import {gql} from 'graphql-tag'

const schemas = gql`
    type User {
        name: String
        apellido: String 
        username: String 
        groups: String
    }

    input UserInput {
        username: String!
        password: String!
        name: String 
        apellido: String 
        groups: [String]
    }

    input ActivoInput {
        nombre: String
        host: String, 
        tipo: String, 
        gAdmin: String, 

    }

    type Activo {
        nombre: String
        host: String, 
        tipo: String, 
        gAdmin: [String], 

    }

    type Change {
        activo: String, 
        user: String, 
        mensaje: String
    }

    input ChangeInput {
        activo: String, 
        user: String, 
        mensaje: String
    }

    type Query {
        #Gestion de usuarios
        login(user: UserInput) : String 
        get_user(token: String) : User
        
        #Gestion de activos
        getAllActivos: [Activo]
        getActivo(activo: ActivoInput): [Activo]

        #Changelog
        getChanges(activo: String): [Change]        
    }

    type Mutation {
        addActivo(activo: ActivoInput): Activo
        signin(user: UserInput) : User
        newChange(change: ChangeInput): Change
    }
`;

export default schemas