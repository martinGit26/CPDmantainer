import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/resolvers'
import mongoose from 'mongoose'
import llave from './configs/config'


//Modelos
import Activo from './models/Activo'
import Usuarios from './models/usuario'
import Changes from './models/changes'
const app = express();

mongoose.connect('mongodb://localhost/CPDMant',{
  useNewUrlParse: true 
})
.then(() => console.log('Conected'))
.catch(err => console.log(err));


 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:{
    Activo, 
    Usuarios, 
    Changes

    
  }
});
 
server.applyMiddleware({ app, path: '/graphql' });
 
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});