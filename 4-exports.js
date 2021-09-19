
function getFlag(strg) {
    for (let i = 0; i < process.argv.length; i++){
        if (process.argv[i] == strg) {
            return process.argv[i+1]
        }
    }
}

// Dados que serão exportados
module.exports = getFlag;


// Prof resolução
// function getFlags(flag) {
//     const index = process.argv.indexOf(flag) + 1

//     return process.argv(index)
// }


