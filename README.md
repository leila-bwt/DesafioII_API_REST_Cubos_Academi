# Primeira Alteração - PR #

## RESTful API

## Indice
**[Sobre](#sobre)**<br>
**[Operações de CRUD](#operações-de-crud)**<br>
    *[-- CREATE](#create)*<br>
    *[-- READ](#read)*<br>
    *[-- UPDATE](#update)*<br>
    *[-- DELETE](#delete)*<br>

**[Demais Funcionalidades](#demais-funcionalidades)**<br>
    *[-- Depositar](#Depositar)*<br>
    *[-- Sacar](#Sacar)*<br>
    *[-- Saldo](#Saldo)*<br>
    *[-- Extrato](#Extrato)*<br>
    
**[Tecnologias Utilizadas](#tecnologias-utilizadas)**<br>
**[Possíveis Melhorias](#possíveis-melhorias)**<br>


## Sobre:

<p>Desenvolvimento de uma API para um Banco Digital. Esse é um projeto piloto que, no futuro, serão implementadas outras funcionalidades<p>

<p> Código organizado, delimitando as responsabilidades de cada arquivo adequadamente sendo um arquivo index.js,
um arquivo de rotas e uma pasta com controladores</p>

![estrutura](https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/7bafc5a2-01a9-4962-82d9-0bc646ef1ffe)

## Operações de CRUD
 / RESTful API que permita:
### CREATE - Criar conta bancária:

* Criar uma nova conta com número único (Id);
* Campo 'CPF e Email' deverá ser único
* Verificar se todos os campos foram informados
* Saldo inicial será sempre 0
  
https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/dcb254c8-2f1a-4e54-a9a3-53ad5a5f82d3





### READ - Listar contas bancárias cadastradas:
* Verificar se a senha do banco foi informada (passado como query params na url)
* Validar se a senha do banco está correta
* Requisição - query params (senha_banco)
  
https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/073ab3ca-f6d2-45da-bcc7-cb381354520f





### UPDATE - Atualizar os dados do usuário da conta bancária:
* Validar o número da conta passado no parametro URL de uma conta cadastrada
* O corpo (body) apresenta um objeto com todas as propriedades do usuário
* Identificar CPF e/ou email já cadastrado
* Todos os campos deverão ser preenchidos

https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/c0628c33-9303-459f-8e9b-02a72b460028



### DELETE - Excluir uma conta bancária:
* Verificar se o numero da conta passado como parametro na URL é válido
* Permitir excluir uma conta bancária apenas se o saldo for 0 (zero)
* Remover a conta do objeto de persistência de dados.
* Numero da conta bancária (passado como parâmetro na rota)
  
https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/fa92ed22-30a6-4d3d-b955-60deddb7be00




## Demais Funcionalidades:

### Depositar em uma conta bancária
* Verificar se a conta bancária informada existe
* Não permitir depósitos com valores negativos ou zerados
* Somar o valor de depósito ao saldo da conta encontrada
* O corpo (body) deverá possuir um objeto com as seguintes propriedades (numero_conta, valor):

https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/a7a1ef8b-8b2a-4c72-9a9e-db5ec6f7b4ca


 


### Sacar de uma conta bancária
* Verificar se o numero da conta, o valor do saque e a senha foram informados no body
* Verificar se a conta bancária informada existe
* Verificar se a senha informada é uma senha válida para a conta informada
* Verificar se há saldo disponível para saque
* Subtrair o valor sacado do saldo da conta encontrada
* O corpo (body) deverá possuir um objeto com as seguintes propriedades (numero_conta, valor, senha):

https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/22f6c952-5f11-40e6-be8c-5b84ee4efdd7





### Tranferir valores entre contas bancárias
* Verificar se o número da conta de origem, de destino, senha da conta de origem e valor da transferência foram informados no body
* Verificar se as contas bancárias de origem e destino informadas existem
* Verificar se a senha informada é uma senha válida para a conta de origem informada
* Verificar se há saldo disponível na conta de origem para a transferência
* Subtrair o valor da transfência do saldo na conta de origem
* Somar o valor da transferência no saldo da conta de destino

https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/49caf05e-910b-4b66-be1d-619f705dcd6f




### Consultar saldo da conta bancária
* Verificar se o numero da conta e a senha foram informadas (passado como query params na url)
* Verificar se a conta bancária informada existe
* Verificar se a senha informada é uma senha válida
* Exibir o saldo da conta bancária em questão

https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/cb130f2e-aeb0-4075-97ed-473a2b93b1db




### Emitir extrato bancário
* Verificar se o numero da conta e a senha foram informadas (passado como query params na url)
* Verificar se a conta bancária informada existe
* Verificar se a senha informada é uma senha válida
* Retornar a lista de transferências, depósitos e saques da conta em questão.

https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/50c58729-e2a3-410a-b371-8536e72e18e0



## Tecnologias Utilizadas:

<div align="center">
     <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/c8c29bd0-c843-4cb8-9b20-9d1d8ed220b4" alt="javascript" height="50" width="40"/>&nbsp;
  <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/190429a3-c73f-4511-acd5-81c587a98842" alt="node.js" height="45" width="40"/>&nbsp;
  <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/653d97ba-8b6a-4280-bf00-9d2b6a196374" alt="insomnia" height="40" width="40"/>&nbsp;
   <img src="https://github.com/leila-bwt/desafio-backend-m02-b2bt05/assets/108028195/defd1a31-c91f-4a01-927d-6a968ea4c5d0" alt="git" height="40" width="40"/>&nbsp;
</div>


## Instalação e desenvolvimento

### Passo 1: Fork e clone do Repositório

Feito o fork do repositório no github da Cubos Academy + clone o repositório do projeto usando o Git para integração de código fonte.

```
https://github.com/cubos-academy/desafio-backend-m02-b2bt05
https://github.com/leila-bwt/desafio-backend-m02-b2bt05
```


## Possíveis melhorias:

### Funcionalidade

* Criar integração com banco de dados.
  ]
}
// HTTP Status 400 / 401 / 403 / 404
{
    "mensagem": "Conta bancária não encontada!"
}
