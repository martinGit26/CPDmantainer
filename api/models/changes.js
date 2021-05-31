import mongoose from 'mongoose'
const Schema = mongoose.Schema; 

const ChangeSchema = new Schema({
    activo: String,
    user: String, 
    mensaje: String, 
  
})

ChangeSchema.index({
  activo: 'text',  
})

const Changes = mongoose.model('Changes', ChangeSchema); 
export default Changes 