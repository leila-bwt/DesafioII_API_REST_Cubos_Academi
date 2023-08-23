const bancodedados = require('../bancodedados');
let { contas, identificadorNumero, banco, depositos, saques, transferencias } = require('../bancodedados');

const listarContas = (req, res) => {
    const { senha_banco } = req.query;


    if (senha_banco === banco.senha) {
        return res.status(200).json(contas);
    } else {
        return res.status(400).json({ mensagem: 'A senha do banco informada é inválida!' });
    }

}

const cadastrarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    // retorna se algum elemento no array tem a mesma condição
    const cpfExistente = contas.find((conta) => {
        return conta.usuario.cpf === cpf
    });

    if (cpfExistente) {
        return res.status(400).json({ mensagem: 'Já existe CPF cadastrado' });
    }

    const emailExistente = contas.find((conta) => {
        return conta.usuario.email === email
    });

    if (emailExistente) {
        return res.status(400).json({ mensagem: 'Já existe email cadastrado' });
    }

    const novaConta = {
        numero: identificadorNumero++,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    }

    contas.push(novaConta);

    return res.status(201).send();
}

const atualizarConta = (req, res) => {
    const { numero } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero);
    });

    if (!conta) {
        return res.status(404).json({ mensagem: 'Numero de conta inexistente' })
    }

    const cpfExistente = contas.find((conta) => { // retorna se algum elemento no array tem a mesma condição
        return conta.usuario.cpf === cpf
    });

    if (cpfExistente) {
        return res.status(400).json({ mensagem: 'Já existe CPF cadastrado' });
    }


    conta.usuario.nome = nome;    
    conta.usuario.cpf = cpf;
    conta.usuario.data_nascimento = data_nascimento;
    conta.usuario.telefone = telefone;
    conta.usuario.email = email;
    conta.usuario.senha = senha;

    return res.status(204).send();
}

const excluirConta = (req, res) => {
    const { numero } = req.params;


    const conta = contas.find((conta) => {
        return conta.numero === Number(numero);
    });
    if (!conta) {
        return res.status(404).json({ mensagem: 'Conta não cadastrada!' })
    }

    if (conta.saldo > 0) {
        return res.status(400).json({ mensagem: 'Não é possível excluir uma conta com saldo positivo!' })
    }

    contas = contas.filter((conta) => {
        return conta.numero !== Number(numero);
    });

    return res.status(204).send();

}

const saldo = (req, res) => {
    const { numero_conta, senha } = req.query;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'Numero da conta e senha são obrigatórios' });
    }

    if (!conta) {
        return res.status(400).json({ mensagem: 'Conta não encontrada' });
    }

    if (senha !== conta.usuario.senha) {
        return res.status(400).json({ mensagem: 'A senha informada é inválida!' });
    }

    return res.status(200).json({ saldo: conta.saldo });

}

const extrato = (req, res) => {
    const { numero_conta, senha } = req.query;

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'Número da conta e senha são obrigatórios' });
    }

    if (!conta) {
        return res.status(400).json({ mensagem: 'Conta não encontrada' });
    }

    if (senha !== conta.usuario.senha) {
        return res.status(400).json({ mensagem: 'A senha informada é inválida!' });
    }

    const extratoConta = {
        depositos: bancodedados.depositos.filter((deposito) => {
            return deposito.numero_conta === numero_conta;
        }),
        saques: saques.filter((saque) => {
            return saque.numero_conta === numero_conta;
        }),
        transferenciasEnviadas: transferencias.filter((transferencia) => {
            return transferencia.numero_conta_origem === numero_conta
        }),
        transferenciasRecebidas: transferencias.filter((transferencia) => {
            return transferencia.numero_conta_destino === numero_conta
        }),

    }

    return res.status(200).json(extratoConta)

}
module.exports = {
    listarContas,
    cadastrarConta,
    atualizarConta,
    excluirConta,
    saldo,
    extrato
}
