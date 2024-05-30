const AllocationModel = require('../models/allocationModel');
const allocationModel = new AllocationModel();

const getAllocationsByUserId = async (req, res) => {
    try {
        const allocations = await allocationModel.getAllocationsByUserId(req.params.id);
        res.json(allocations);
    } catch (err) {
        res.status(404).send("Nenhuma alocação foi encontrada.");
    }
};

const addAllocation = async (req, res) => {
    try {
        const allocationId = await allocationModel.addAllocation(req.body);
        res.status(200).json({ id: allocationId });
    } catch (err) {
        res.status(500).send("Erro ao adicionar alocação.");
    }
};

const deleteAllocation = async (req, res) => {
    try {
        await allocationModel.deleteAllocation(req.params.id);
        res.status(200).json({ message: `Alocação de id ${req.params.id} removida com sucesso!` });
    } catch (err) {
        res.status(500).send("Erro ao remover alocação.");
    }
};

module.exports = {
    getAllocationsByUserId,
    addAllocation,
    deleteAllocation
};
