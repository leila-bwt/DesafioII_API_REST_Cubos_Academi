const express = require('express');
const contas = require('./controladores/contas');
const transacoes = require('./controladores/transacoes');

const rotas = express();

rotas.get('/contas', contas.listarContas);
rotas.post('/contas', contas.cadastrarConta);
rotas.put('/contas/:numero', contas.atualizarConta)
rotas.delete('/contas/:numero', contas.excluirConta);
rotas.post('/transacoes/depositar', transacoes.depositar);
rotas.post('/transacoes/sacar', transacoes.sacar);
rotas.post('/transacoes/transferir', transacoes.transferir);
rotas.get('/contas/saldo', contas.saldo);
rotas.get('/contas/extrato', contas.extrato);

module.exports = rotas;