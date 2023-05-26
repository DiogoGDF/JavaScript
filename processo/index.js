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
console.log(longest_value);

// Exercício 3 => Encontrar se é possível somar três números de um vetor para resultar um número k
function temSomaTripla(array, k) {
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    let esquerda = i + 1;
    let direita = array.length - 1;

    while (esquerda < direita) {
      const soma = array[i] + array[esquerda] + array[direita];

      if (soma === k) {
        return 1; 
      } else if (soma < k) {
        esquerda++;
      } else {
        direita--;
      }
    }
  }

  return 0; 
}

const array = [1, 4, 2, 7, 3, 9, 6];
const k = 14;
const temSoma = temSomaTripla(array, k);
console.log(temSoma); 

// Exercício 4 => Encontrar o mínimo múltiplo comum de dois números
function calcularMMC(a, b) {

  function calcularMDC(x, mdc) {
      while (x !== 0){
          const temp = x;
          x = mdc % x;
          mdc = temp;
      }
      return mdc;
  }

  // Calcular o MMC usando a propriedade MMC = (a * b) / MDC(a, b)
  const mdc = calcularMDC(a, b);
  const mmc = (a * b) / mdc;

  return mmc;
}

// Exemplo de uso
const numero1 = 12;
const numero2 = 18;

const mmc = calcularMMC(numero1, numero2);
console.log(mmc); // Output: 36

// Exercício 5 => Conversor de Número Romano
function converterNumerosRomanos(numeroRomano) {
  const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let numeroDecimal = 0;

  for (let i = 0; i < numeroRomano.length; i++) {
    const atual = romanos[numeroRomano[i]];
    const prox = romanos[numeroRomano[i + 1]];

    if (prox && prox > atual) {
      numeroDecimal += prox - atual;
      i++;
    } else {
      numeroDecimal += atual;
    }
  }

  return numeroDecimal;
}

// Exemplo de uso
const numeroRomano = "XIV";
const numeroDecimal = converterNumerosRomanos(numeroRomano);
console.log(numeroDecimal); // Saída: 14

//
