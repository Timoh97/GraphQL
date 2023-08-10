const Query = {
  //querying all maincards in db, maincards destructured from context in index.js
  maincards: async (parent, args, { pool }) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM maincards');
      client.release();
      return result.rows;
    } catch (error) {
      console.error('Error fetching maincards:', error);
      throw error;
    }
  },
   
    //querying all animals in db, animals destructured from context in index.js
    animals: async (parent, args, { pool }) => {
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT id,image, title FROM animals');
        client.release();
        return result.rows;
      } catch (error) {
        console.error('Error fetching animals:', error);
        throw error;
      }
    },

    // doing sigle query
    // animals is destructured from the context in index.js
    // args represents the arguments provided by the client in the GraphQL
    animal: async (parent, args, { pool }) => {
      try {
        const client = await pool.connect();
        const query = 'SELECT id,image, title FROM animals WHERE slug = $1';
        const result = await client.query(query, [args.slug]);
        client.release();
    
        // Assuming the query returns a single row
        return result.rows[0];
      } catch (error) {
        console.error('Error fetching animal:', error);
        throw error;
      }
    }
    ,
    //querying all animals in db, categories destructured from context in index.js
    categories: async (parent, args, { pool }) => {
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM categories');
        client.release();
        return result.rows;
      } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
    },
  
    products: async (parent, args, { pool }) => {
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM products');
        client.release();
        return result.rows;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    },

    review: async (parent, args, { pool }) => {
      try {
        const client = await pool.connect();
        const query = 'SELECT * FROM reviews WHERE id =$1';
        const result = await client.query(query, [args.id]);
        client.release();
        return result.rows[0];
      } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
      }
    },
    

    category: async (parent, args, { pool }) => {
      try {
        const client = await pool.connect();
        const query = 'SELECT * FROM categories WHERE slug = $1';
        const result = await client.query(query, [args.slug]);
        client.release();
  
        return result.rows[0];
      } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
      }
    }
}

module.exports = Query




