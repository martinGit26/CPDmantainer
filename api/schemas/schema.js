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
        gAdmin: String, 

    }

    type Query {
        #Gestion de usuarios
        login(user: UserInput) : String 
        sigin(user: UserInput) : User
        get_user(token: String) : User

        #Gestion de activos
        getAllActives(): Activo
        getActivo(activo: ActivoInput)
        addActivo(activo: ActivoInput)
    }
`;

export default schemas