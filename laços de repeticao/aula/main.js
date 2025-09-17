//*Considere um programa que imprima todos os números pares de 0 a 12. Uma maneira de escrever isso é a seguinte:

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);


//*While (estrutura de repetição)

let numero = 0;

while (numero <= 12) {
  console.log(numero);
  numero = numero + 2; // Incrementamos o valor da variável em 2
}


//Uma instrução que começa com a palavra-chave `while` cria um loop. A palavra `while` é seguida por uma **expressão** entre parênteses e, em seguida, por um bloco de código, muito semelhante ao `if`. O loop continua entrando nessa instrução enquanto a **expressão condicional** produzir um valor que seja verdadeiro (`true`).

//A ligação numérica demonstra como uma ligação pode acompanhar o progresso de um programa. Cada vez que o loop se repete, o número recebe um valor que é 2 a mais do que o seu valor anterior. No início de cada repetição, ele é comparado com o número 12 para decidir se o trabalho do programa está concluído.

//Como exemplo que realmente faz algo útil, vamos escrever um programa que calcula e mostra o valor de 2 elevado à potência de 5. Usamos duas variáveis: uma para armazenar nosso resultado e outra para contar quantas vezes multiplicamos esse resultado por 2. O loop testa se a segunda ligação já atingiu 10 e, se não, atualiza ambas as variáveis.


let resultado = 1;
let contador = 0;

while (contador < 5) {
  resultado = resultado * 2;
  countador = contador + 1;
}

console.log(result); // resultado esperado: 32

//Um loop do...while é uma estrutura de controle semelhante a um loop while. Ele difere apenas em um ponto: um loop do sempre executa seu corpo pelo menos uma vez e só começa a testar se deve parar após essa primeira execução. Para alcançar isso, o teste aparece após o corpo do loop:


let nome;

do {
  nome = prompt("Qual o seu nome?");
} while (!yourName);
console.log("Hello " + yourName);

//Este programa irá forçá-lo a inserir um nome. Ele irá perguntar repetidamente até obter algo que não seja uma string vazia. 

//A aplicação do operador `!` (*operador lógico não*) irá converter um valor para o tipo **Booleano** antes de negá-lo, e todas as strings, exceto `""`, serão convertidas para verdadeiro. Isso significa que o loop continuará girando até que você forneça um nome não vazio.

//For

//Muitos loops seguem o padrão mostrado nos exemplos `while`. Primeiro, é criada uma variável “contador” para acompanhar o progresso do loop. Em seguida, vem um loop while, geralmente com uma expressão de teste que verifica se o contador atingiu seu valor final. No final do corpo do loop, o contador é atualizado para acompanhar o progresso.

//omo esse padrão é tão comum, o JavaScript e linguagens semelhantes oferecem uma forma um pouco mais curta e abrangente, o loop `for`:

for (let contador = 0; contador <= 12; contador = contador + 2) {
  console.log(contador);
}


//Este programa é exatamente equivalente ao exemplo anterior de impressão de números pares. A única mudança é que todas as instruções relacionadas ao “estado” do loop estão agrupadas após for.

//Os parênteses após uma palavra-chave `for` devem conter dois pontos-e-vírgulas. 

//- A parte antes do primeiro ponto-e-vírgula inicializa o loop, geralmente definindo uma variável
//- A segunda parte é a expressão que verifica se o loop deve continuar
//- A parte final atualiza o estado do loop após cada iteração. Na maioria dos casos, isso é mais curto e claro do que uma construção while.

//Este código calcula 2 elevado à potência de 5 usando `for` em vez de `while`: 


let resultados = 1;
for (let contador = 0; contador < 5; contador = contador + 1) {
  resultado = resultado * 2;
}
console.log(resultado); // resultado esperado: 32


//## Saindo de um loop

//Ter a condição do loop produzindo `false` não é a única maneira de um loop terminar. A instrução `break` tem o efeito de sair imediatamente do loop que a envolve. Seu uso é demonstrado no programa a seguir, que encontra o primeiro número que é maior ou igual a 20 e divisível por 7: