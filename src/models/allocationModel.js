const { pool } = require('../config/dbConfig');

class AllocationModel {
    async getAllocationsByUserId(userId) {
        const result = await pool.query('SELECT * FROM allocations WHERE user_id = $1', [userId]);
        return result.rows;
    }

    async addAllocation(allocation) {
        const { field_id, user_id, date, hour, field_name } = allocation;
        const result = await pool.query(
            'INSERT INTO allocations (field_id, user_id, date, hour, field_name) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [field_id, user_id, date, hour, field_name]
        );
        return result.rows[0].id;
    }

    async deleteAllocation(id) {
        await pool.query('DELETE FROM allocations WHERE id = $1', [id]);
    }
}

module.exports = AllocationModel;
