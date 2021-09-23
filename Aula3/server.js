const express = require('express')
const app = express() // guardando o express em uma constante

app.set('view engine', 'ejs') // dizendo ao express como irá renderizar as páginas

app.get("/", (req, res) => { // rota raiz
    const items = [
        { title: 'D', message: 'esenvolver aplicações/serviços de forma fácil' },
        { title: 'E', message: 'JS usa JS para renderizar HTML' },
        { title: 'M', message: 'uito fácil de user' },
        { title: 'A', message: 'prendizado legal' },
        { title: 'I', message: 'nstall EJS' },
        { title: 'S', message: 'intaxe simples' },
    ]
    res.render('pages/index', {
        qualitys: items,
    })
})

app.get("/about", (req, res) => { // rota about
    res.render('pages/about')
})

app.listen(8080) // iniciando o servidor na porta 8080 (localhost:8080)
console.log('rodando...')