// Exercício 1 => retornar quantidade de números par, e números impar em um array
const numbers = [30, 67, 89, 24, 92, 50, 66, 23, 88, 12]

let par = 0
let impar = 0

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0)
        par++;
    else
        impar++;
}
console.log(par, impar)

// Exercício 2 => encontrar a mais longa substring em comum entre duas strings
function longest_subsequence(s1, s2) {
    let cont = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(0));

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                cont[i][j] = cont[i - 1][j - 1] + 1;
            } else {
                cont[i][j] = Math.max(cont[i - 1][j], cont[i][j - 1]);
            }
        }
    }

    return cont[s1.length][s2.length];
}

const s1 = "abcde";
const s2 = "ace";

const longest_value = longest_subsequence(s1, s2);
console.log(longest_value);  // Output: 3

