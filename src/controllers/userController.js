const userModel = require('../models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (err) {
        res.status(404).send("Falha encontrada no armazenamento de dados.");
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(404).send("Nenhum usuário foi encontrado.");
    }
};

const addUser = async (req, res) => {
    try {
        const userId = await userModel.addUser(req.body);
        res.status(200).json({ id: userId });
    } catch (err) {
        res.status(500).send("Erro ao adicionar usuário.");
    }
};

module.exports = {
    getUsers,
    getUserById,
    addUser
};
