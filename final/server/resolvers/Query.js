const Query = {
  //querying all maincards in db, maincards destructured from context in index.js
    mainCards: (parent, args, { mainCards }) => mainCards,
    //querying all animals in db, animals destructured from context in index.js
    animals: (parent, args, {animals}) => animals,

    // doing sigle query
    // animals is destructured from the context in index.js
    // args represents the arguments provided by the client in the GraphQL
    animal: (parent, args, { animals }) => {
        let animal = animals.find((animal) => {
            return animal.slug === args.slug
        })
        return animal
    },
    //querying all animals in db, categories destructured from context in index.js
    categories: (parent, args, { categories }) => categories,
    //querying all products in db, products destructured from context in index.js
    products: (parent, args, {products}) => products,
    reviews: (parent, args, {reviews}) => reviews,
       // doing sigle query
    // reviews is destructured from the context in index.js
    // args represents the arguments provided by the client in the GraphQL
    review: (parent, args, { reviews }) => {
      let review = reviews.find((review) => {
        return review.id === args.id
      });
      return review;
    },
    // doing sigle query
    // categories is destructured from the context in the index.js
    // args represents the arguments provided by the client in the GraphQL 
    category: (parent, args, { categories }) => {
      let category = categories.find((category) => {

        return category.slug === args.slug
      });
      return category;
    }
}

module.exports = Query

