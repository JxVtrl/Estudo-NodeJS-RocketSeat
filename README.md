# Estudo NODEJS

## Criar Projeto
*Para criar o projeto, execute o comando:*
> npm init

*ou se preferir, você pode usar o comando para setar as opções pedidas automaticamente:*
> npm init -y

## Instalar Dependências
*Para instalar as dependências do projeto, execute o comando:*
> npm install <"dependencia">

*ou dependencia apenas para desenvolvimento:*
> npm i <"dependencia"> -D

## Versão das Dependências
*Para verificar a versão das dependências instaladas, execute o comando:*
> npm outdated

## Atualizar Dependências
*Para atualizar todas as dependências instaladas, execute o comando:*
> npm upgrade

*Para atualizar para a ultima versão da dependência:*
> npm i <"dependencia">@latest

## Instalar Dependências globais
*Para instalar as dependências globais do projeto, execute o comando:*
> npm install <"dependencia"> -g

## Desinstalar Dependências
*Para desinstalar as dependências do projeto, execute o comando:*
> npm uninstall <"dependencia">

*Se for dependência global:*
> npm uninstall <"dependencia"> -g

## Onde estão as dependências?
*Para saber onde estão as dependências do projeto, execute o comando:*
> npm root

*Para saber onde estão as dependências globais do projeto:*
> npm root -g

## Updates
*Caso houver alguma mudança na estrutura do projeto, você pode executar o comando:*
> npm update

## Iniciar Script
*Para iniciar o script, execute o comando:*
> npm run <"script-name">
> Ex: npm run start