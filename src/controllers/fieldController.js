const FieldModel = require('../models/fieldModel');
const fieldModel = new FieldModel();

const getFields = async (req, res) => {
    try {
        const fields = await fieldModel.getFields();
        res.json(fields);
    } catch (err) {
        res.status(404).send("Falha encontrada no armazenamento de dados.");
    }
};

module.exports = {
    getFields
};
