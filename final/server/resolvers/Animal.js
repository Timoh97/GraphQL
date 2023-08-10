const Animal = {
  category: async (parent, args, { pool }) => {
    try {
      const client = await pool.connect();
      const query = 'SELECT * FROM categories WHERE id = $1';
      const result = await client.query(query, [parent.category]);
      client.release();

      // Assuming the query returns a single row
      return result.rows[0];
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  }
};

module.exports = Animal;