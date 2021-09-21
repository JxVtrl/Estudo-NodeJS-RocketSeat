const { inherits } = require('util');
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)
const chapolin = new Character('Chapolin Colorado')

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name}!`))

console.log('Quem poderá me salvar?')
chapolin.emit('help')