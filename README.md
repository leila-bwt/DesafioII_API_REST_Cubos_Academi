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
  
https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/450b2d84-e7aa-4189-99d6-b93526f49aae


### READ - Listar contas bancárias cadastradas:
* Verificar se a senha do banco foi informada (passado como query params na url)
* Validar se a senha do banco está correta
* Requisição - query params (senha_banco)

https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/4ecafe20-3d94-4e3b-801c-447bcd4092ad


### UPDATE - Atualizar os dados do usuário da conta bancária:
* Validar o número da conta passado no parametro URL de uma conta cadastrada
* O corpo (body) apresenta um objeto com todas as propriedades do usuário
* Identificar CPF e/ou email já cadastrado
* Todos os campos deverão ser preenchidos

https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/ee4e4506-869b-4c08-bb88-d3cbcb2cc4c0




### DELETE - Excluir uma conta bancária:
* Verificar se o numero da conta passado como parametro na URL é válido
* Permitir excluir uma conta bancária apenas se o saldo for 0 (zero)
* Remover a conta do objeto de persistência de dados.
* Numero da conta bancária (passado como parâmetro na rota)
  
https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/baa3f2b6-41fc-4da6-b5e2-acd4797c89e4


## Demais Funcionalidades:

### Depositar em uma conta bancária
* Verificar se a conta bancária informada existe
* Não permitir depósitos com valores negativos ou zerados
* Somar o valor de depósito ao saldo da conta encontrada
* O corpo (body) deverá possuir um objeto com as seguintes propriedades (numero_conta, valor):

 
https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/b76c61ea-2ba8-431a-8905-944e005bf060


### Sacar de uma conta bancária
* Verificar se o numero da conta, o valor do saque e a senha foram informados no body
* Verificar se a conta bancária informada existe
* Verificar se a senha informada é uma senha válida para a conta informada
* Verificar se há saldo disponível para saque
* Subtrair o valor sacado do saldo da conta encontrada

https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/bd156ef7-f9dd-45fc-9ab7-cdf95d6c45e3


### Tranferir valores entre contas bancárias
* Verificar se o número da conta de origem, de destino, senha da conta de origem e valor da transferência foram informados no body
* Verificar se as contas bancárias de origem e destino informadas existem
* Verificar se a senha informada é uma senha válida para a conta de origem informada
* Verificar se há saldo disponível na conta de origem para a transferência
* Subtrair o valor da transfência do saldo na conta de origem
* Somar o valor da transferência no saldo da conta de destino

https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/788f3857-68a2-422f-989f-084a5d713422

### Consultar saldo da conta bancária
* Verificar se o numero da conta e a senha foram informadas (passado como query params na url)
* Verificar se a conta bancária informada existe
* Verificar se a senha informada é uma senha válida
* Exibir o saldo da conta bancária em questão

https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/a2eb3bc3-c21d-4b76-97da-de4b99c78cbd


### Emitir extrato bancário
* Verificar se o numero da conta e a senha foram informadas (passado como query params na url)
* Verificar se a conta bancária informada existe
* Verificar se a senha informada é uma senha válida
* Retornar a lista de transferências, depósitos e saques da conta em questão.

https://github.com/leila-bwt/DesafioII_API_REST_Cubos_Academi/assets/108028195/49bbc911-1407-47d5-8ed9-ddb431826fff


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
