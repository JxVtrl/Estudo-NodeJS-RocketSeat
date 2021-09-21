const questions = [
    "Qual é o seu nome?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudou hoje?",
]

const ask = (index = 0) => {
    process.stdout.write(`\n\n\n${questions[index]} > `)
}

ask()

const answers = []

// Listener de eventos de entrada(stdin) ligado(on)
process.stdin.on('data', data => {
    // Ao entrar dado, irá executar as funções:
        // Escrever na tela
    // process.stdout.write(data.toString().trim() + '\n')
        // Sair do processo
    // process.exit()
        // Adicionar ao array de respostas
    answers.push(data.toString().trim())

    // Se o index for menor que o tamanho do array de perguntas
    if(answers.length < questions.length) {
        ask(answers.length)

    // Se o index for maior que o tamanho do array de perguntas
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`\n\nBacana, ${answers[0]}!`)
    answers.shift()
    console.log(`Você respondeu as seguintes perguntas:\n`)
        answers.forEach((answer, index) => {
            console.log(`${index + 1}) ${questions[index+1]}`)
            console.log(`R: ${answer}\n`)
        })
}) 