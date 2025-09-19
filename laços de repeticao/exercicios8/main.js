// let peso;
// let numeroMaior = 0;
// let contador = 0;

// do { peso = prompt('digite o peso'); 
//     peso = Number(peso);
//     contador = contador + 1
//     if(peso > numeroMaior ){
//         numeroMaior = peso;
//     }

// } while (contador < 10);
// console.log(numeroMaior);
//Escreva um programa em que o usuário insira o peso de 10 pessoas e calcule a média aritmética do peso delas;


let somapesos = 0;
let pesoAtual = 0;

for (let contador = 1; contador < 11; contador = contador + 1 ) {
    pesoAtual = prompt("insira o peso da pessoa numero" + contador);
    pesoAtual = Number (pesoAtual);
    somapesos = somapesos + pesoAtual;

} console.log('a media dos pesos é ', (somapesos / 10));
