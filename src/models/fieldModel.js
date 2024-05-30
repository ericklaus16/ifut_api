const { pool } = require('../config/dbConfig');

const getFields = async () => {
    const result = await pool.query('SELECT * FROM fields');
    return result.rows;
};

module.exports = {
    getFields
};
