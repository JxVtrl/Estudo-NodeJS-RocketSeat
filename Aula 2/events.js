const {EventEmitter} = require('events');
const event = new EventEmitter();

event.on('saySomething', (message) => {
    console.log('Ouvido: ', message);
})

event.once('saySomething', (message) => { 
    console.log('Ouvido: ', message);
})

event.emit('saySomething', 'Mensagem1');
event.emit('saySomething', 'João');
event.emit('saySomething', 'Emitido');