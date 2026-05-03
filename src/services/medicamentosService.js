let medicamentos = [
    { id: 1, nome: "Dipirona", quantidade: 50 },
    { id: 2, nome: "Ibuprofeno", quantidade: 30 },
    { id: 3, nome: "Amoxicilina", quantidade: 20 }
];

function listar() {
    return medicamentos;
}

function buscarPorId(id) {
    return medicamentos.find(m => m.id === id);
}

function criar({ nome, quantidade }) {
    const novo = {
        id: medicamentos.length > 0 ? medicamentos[medicamentos.length - 1].id + 1 : 1,
        nome,
        quantidade
    };

    medicamentos.push(novo);
    return novo;
}

function atualizar(id, { nome, quantidade }) {
    const index = medicamentos.findIndex(m => m.id === id);

    if (index === -1) {
        return null;
    }

    medicamentos[index] = {
        ...medicamentos[index],
        nome: nome ?? medicamentos[index].nome,
        quantidade: quantidade ?? medicamentos[index].quantidade
    };

    return medicamentos[index];
}

function remover(id) {
    const index = medicamentos.findIndex(m => m.id === id);

    if (index === -1) {
        return null;
    }

    const removido = medicamentos[index];
    medicamentos.splice(index, 1);
    return removido;
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};
