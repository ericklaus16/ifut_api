const { pool } = require('../config/dbConfig');

class FieldModel {
    async getFields() {
        const result = await pool.query('SELECT * FROM fields');
        return result.rows;
    }
}

module.exports = FieldModel;
