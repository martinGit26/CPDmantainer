import mongoose from 'mongoose'
const Schema = mongoose.Schema; 

const ActivoSchema = new Schema({
    nombre: String, 
    host: String, 
    tipo: String, 
    gAdmin: String
})

ActivoSchema.index({
  nombre: 'text', 
  host: 'text'  
})

const Activos = mongoose.model('activos', ActivoSchema); 
export default Activos 