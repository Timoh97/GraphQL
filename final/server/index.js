const { ApolloServer } = require('apollo-server');
// const { maincards, animals, categories, products, reviews} = require('./db')
const { pool } = require('./db');
const typeDefs = require('./schema')
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Animal = require("./resolvers/Animal")
const Category = require("./resolvers/Category")



  const server = new ApolloServer({ 
    typeDefs, 
    resolvers: {
      Query,
      Mutation,
      Animal,
      Category
    },
    context: () => ({ pool}),
   
    
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });