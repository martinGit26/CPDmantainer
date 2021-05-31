import mongoose from 'mongoose'
const Schema = mongoose.Schema; 

const UsuarioSchema = new Schema({
    name: String, 
    apellido: String, 
    username: String, 
    password: String, 
    grupo: [String]
})

UsuarioSchema.index({
  nombre: 'text', 
  host: 'text'  
})

const Usuarios = mongoose.model('usuarios', UsuarioSchema); 
export default Usuarios 