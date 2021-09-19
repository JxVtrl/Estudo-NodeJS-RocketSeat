// Módulos Nativos

// const path = require('path');

// Qual o nome base do aquivo?
// console.log(path.basename(__filename)); // require.js

// console.log(path.basename('/home/user/dir/file.txt')); // file.txt

// Meus Módulos

const getFlag = require('./4-exports.js');

console.log(`Olá ${getFlag('--name')}. ${getFlag('--greetings')}`)