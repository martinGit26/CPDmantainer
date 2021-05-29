import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/resolvers'

 
const app = express();
 

 
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
 
server.applyMiddleware({ app, path: '/graphql' });
 
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});