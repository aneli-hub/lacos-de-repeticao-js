//Escreva um programa em que o usuário insira 10 números, exiba a contagem de quantos números inseridos são maiores do que 50;

let maioresQue50 = 0; // contador de números maiores que 50

for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt(`Digite o ${i}º número:`));
  
  if (numero > 50) {
    maioresQue50++;
  }
}

console.log(`Foram inseridos ${maioresQue50} números maiores que 50.`);