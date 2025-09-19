let numero;
let numeroMaior = 0;
let contador = 0;

do { numero = prompt('digite um numero'); 
    numero = Number(numero);// converter string para numero
    contador = contador + 1
    if(numero > numeroMaior ){
        numeroMaior = numero;
    }

} while (contador < 5);
console.log(numeroMaior);