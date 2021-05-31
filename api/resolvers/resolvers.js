//imports
import jwt from 'jsonwebtoken'
import llave from '../configs/config'
import jwt_decode from 'jwt-decode'
import md5 from 'md5'
//code

const resolvers = {
    Query : {

//Gestion de Usuarios
        login: async (_, {user}, __) => {

            var payload = {
                user: user.username, 
                password: user.password
            }
            var token = jwt.sign(payload, llave)

            return token
        },

        get_user: async(_,{token}, {Usuarios}) => {
            var respuesta = jwt_decode(token)
            
            var res = await Usuarios.find({
                username: respuesta.user, 
                password: respuesta.password
            })
            
            return res[0]
        },

//Gestion de activos
        getAllActivos: async(_, __, {Activo}) =>{
            return await Activo.find()
        },

        getActivo: async(_, {activo}, {Activo}) => {
            return await Activo.find({ $or: [
                {nombre: activo.nombre}, 
                {host: { $regex: activo.host}}
            ]
            })
        },
        //Gestion de cambios
        getChanges: async(_, {activo}, {Changes}) => {
           
            return await Changes.find({activo: activo})
        }
      
    },

    Mutation: {
        addActivo: async(_, {activo}, {Activo}) => {
            console.log(activo)
            var activoNew = new Activo(activo)
            return await activoNew.save()
        },
        signin: async(_,{user}, {Usuarios}) => {
            var usermd5 = user
            console.log(user)
            usermd5.password = md5(user.password)
            var newUser = new Usuarios(usermd5);
            return await newUser.save() 
        },

        newChange: async(_,{change},{Changes})=>{
            
            var newChange = new Changes(change);
            return await newChange.save()
        }
    }
}

export default resolvers