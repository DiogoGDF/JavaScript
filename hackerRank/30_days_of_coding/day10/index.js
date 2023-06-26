'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);
    const n2 = n.toString(2)
    let cont = 0
    let current = 0
    for (let i = 0; i < n2.length; i++){
        if (n2.charAt(i) == '1'){
            current++
        }
        else { 
            if (current > cont)
                cont = current
            current = 0
        }
    }
    if (current > cont)
        cont = current
    console.log(cont)
}

