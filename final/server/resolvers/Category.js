const Category = {
    animals: async (parent, args, { pool }) => {
      try {
        const client = await pool.connect();
        const query = 'SELECT * FROM animals WHERE category_id = $1';
        const result = await client.query(query, [parent.id]);
        client.release();
  
        return result.rows; // Return an array of animals
      } catch (error) {
        console.error('Error fetching animals in category:', error);
        throw error;
      }
    }
  };
  
  module.exports = Category;