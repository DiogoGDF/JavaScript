const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (inputString) => {
    console.log(inputString)
    rl.close()
})

console.log('Hello world 👋')
