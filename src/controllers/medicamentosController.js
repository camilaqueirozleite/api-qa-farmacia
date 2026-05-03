const medicamentosService = require('../services/medicamentosService');

// GET /medicamentos
function listar(req, res) {
    const lista = medicamentosService.listar();
    return res.status(200).json(lista);
}

// GET /medicamentos/:id
function obter(req, res) {
    const id = Number(req.params.id);
    const medicamento = medicamentosService.buscarPorId(id);

    if (!medicamento) {
        return res.status(404).json({ erro: "Medicamento não encontrado" });
    }

    return res.status(200).json(medicamento);
}

// POST /medicamentos
function criar(req, res) {
    const { nome, quantidade } = req.body;

    if (!nome || quantidade == null) {
        return res.status(400).json({ erro: "Nome e quantidade são obrigatórios" });
    }

    const novo = medicamentosService.criar({ nome, quantidade });
    return res.status(201).json(novo);
}

// PUT /medicamentos/:id
function atualizar(req, res) {
    const id = Number(req.params.id);
    const { nome, quantidade } = req.body;

    const atualizado = medicamentosService.atualizar(id, { nome, quantidade });

    if (!atualizado) {
        return res.status(404).json({ erro: "Medicamento não encontrado" });
    }

    return res.status(200).json(atualizado);
}

// DELETE /medicamentos/:id
function deletar(req, res) {
    const id = Number(req.params.id);
    const removido = medicamentosService.remover(id);

    if (!removido) {
        return res.status(404).json({ erro: "Medicamento não encontrado" });
    }

    return res.status(204).send();
}

module.exports = {
    listar,
    obter,
    criar,
    atualizar,
    deletar
};
