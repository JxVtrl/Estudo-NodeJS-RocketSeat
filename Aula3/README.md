## Construindo um site com NodeJS + EJS

### 🧬 Inicio do entendimento de *Bootstrap*
>[Bootstrap](https://getbootstrap.com/) é um framework de css e js para construção de sites.
----------
### 🔧 Modificando HTML para Arquivo EJS
~~~~
index.html ➡ index.ejs
~~~~
----------
### ✨ Criando a pasta *views*
> A pasta *views* é onde deve conter os arquivos *ejs*
----------
### 📦 Instalando o EJS
##### Módulo EJS (HTML inteligente)
* `npm install ejs`
##### Módulo Express (Modulo que cria um servidor)
* `npm install express`
----------
### ✨ Criando o arquivo *server.js*
> O arquivo *server.js* é o responsável por iniciar o servidor e configurar o *EJS*
#### Requisição do *Express*
```
const express = require('express');
```
#### Setando view engine
```
const app = express();
app.set('view engine', 'ejs');
```
#### Renderizando o arquivo *index.ejs*
```
app.get('/', (req, res) => {
    res.render('index');
});
```
#### Rodando o servidor na porta 8080
```
app.listen(8080);
```
### 🐱‍🏍 Rodando o arquivo *server.js*

* `node server.js`

### 📚 Modularizando o código
> O arquivo *index.ejs* é responsável por agrupar os módulos *header*, *footer*, *navbar*, *content*, *etc*

> Cada arquivo separadamente contém a sua tag correspondente e conteúdo

> No index.ejs, podemos chamar a parte do código que queremos, basta chamar a tag a seguir
```
<%- include('nome-do-modulo'); %>
```

> Caso queira passar um objeto pela tag, basta utilizar a seguinte sintaxe
```
<%- include('nome-do-modulo', {objeto: 'valor'}); %>
```

> Para exibir o conteúdo do objeto passado:
```
<%= objeto %>
```

> Identificando se foi passado um objeto:
```
<%= typeof pagina != 'undefined' ? pagina:'Default' %>
```

> Para exibir o conteúdo de um array em uma ul:

*Tudo que for JS deve estar entre EJS tag, e tudo que for HTML não*
```
<% array.forEach(array_item => { %> --> EJS abre e fecha

    <li>                            --> HTML, sem tag EJS

        <strong><%= array_item.title %></strong> - <%= array_item.message %>
                                    --> JS, com tag EJS
    </li>

<% }); %>                           --> EJS abre e fecha
```