const { pool } = require('../config/dbConfig');

class UserModel {
    async getUsers() {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }

    async getUserById(id) {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    async addUser(user) {
        const { username, email, pass, cpf, phone } = user;
        const result = await pool.query(
            'INSERT INTO users (username, email, pass, cpf, phone) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [username, email, pass, cpf, phone]
        );
        return result.rows[0].id;
    }
}

module.exports = UserModel;
