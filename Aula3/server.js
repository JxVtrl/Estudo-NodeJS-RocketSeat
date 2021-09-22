const express = require('express')
const app = express() // guardando o express em uma constante

app.set('view engine', 'ejs') // dizendo ao express como irá renderizar as páginas

app.get("/", (req, res) => { // rota raiz
    res.render('index') // response.render('nome_da_pagina')
})

app.get("/about", (req, res) => { // rota about
    res.render('about')
})

app.listen(8080) // iniciando o servidor na porta 8080 (localhost:8080)
console.log('rodando...')