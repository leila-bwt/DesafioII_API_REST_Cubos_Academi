const bancodedados = require('../bancodedados');
let { contas, depositos, saques, transferencias } = require('../bancodedados');

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });


    if (!conta) {
        return res.status(404).json({ mensagem: 'Essa conta não existe' });

    }
    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Valor inválido. Coloque um valor maior que 0' });

    }
    if (!conta || !valor) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    conta.saldo += Number(valor)

    depositos.push({
        "data": new Date(),
        "numero_conta": numero_conta,
        valor
    });

    return res.status(204).send();
}


const sacar = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });


    if (!conta) {
        return res.status(404).json({ mensagem: 'Essa conta não existe' });
    }

    if (conta.saldo <= 0) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente' });
    }

    if (!conta || !valor || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }
    if (senha !== conta.usuario.senha) {
        return res.status(400).json({ mensagem: 'Senha incorreta.' });

    }

    conta.saldo -= Number(valor)

    saques.push({ "data": new Date(), "numero_conta": numero_conta, valor });

    return res.status(204).send();

}

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, senha, valor } = req.body;

    const contaDeOrigem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem);
    });

    const contaDeDestino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino);
    });

    if (!contaDeOrigem || !contaDeDestino) {
        return res.status(404).json({ mensagem: 'Essa conta não existe' });
    }

    if (!valor || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    if (senha !== contaDeOrigem.usuario.senha) {
        return res.status(400).json({ mensagem: 'Senha incorreta.' });

    }
    if (contaDeOrigem.saldo < valor) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente' });
    }

    contaDeOrigem.saldo -= valor;
    contaDeDestino.saldo += valor;

    transferencias.push({
        "data": new Date(),
        "numero_conta_origem": numero_conta_origem,
        "numero_conta_destino": numero_conta_destino,
        valor
    });

    return res.status(204).send();

}

module.exports = {
    depositar,
    sacar,
    transferir
}