const { gql } = require('apollo-server');

const typeDefs = gql`

  type MainCard {
      title: String!
      image: String!
  }

  type Animal {
      id: ID!
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      slug: String!
      stock: Int!
      onSale: Boolean
      category: Category
  }

  type Product {
      id: ID!
      name: String!
      description: String!
      quantity: Int!
      price: Float!
      image: String
      onSale: Boolean!

  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }


  type Reviews {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productid: String!

  }

  type Query {
    maincards: [MainCard]
    animals: [Animal!]!
    products:[Product!]!
    reviews:[Reviews!]!
    categories: [Category!]!
    #doing sigle query
    animal(slug: String!): Animal
    #doing sigle query
    category(slug: String!): Category
    #doing single query
    review(id:String!):Reviews!


    
   
   

   
  }

  type Mutation {
      addAnimal(
        image: String!
        title: String!
        rating: Float
        price: String!
        description: [String!]!
        slug: String!
        stock: Int!
        onSale: Boolean
        category: String!
      ): Animal
      removeAnimal(id: ID!): Boolean!
  }

`;

module.exports = typeDefs