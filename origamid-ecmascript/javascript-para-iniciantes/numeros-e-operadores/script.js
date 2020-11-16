//Números
/*
var idade = 28;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10; //20000000000
-------------------------------------------

//Operadores Aritméticos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//lembrando que + em strings serve para concatenar
----------------------------------------------

Operadores Aritméticos (STRINGS)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

//é possível verificar se uma variável é NaN ou não com a função isNaN()
-----------------------------------------------

A ordem importa
-Começa pela multiplicação e divisão, depois por soma e subtração
-Parênteses para priorizar uma expressão

var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; //40
------------------------------------------------

Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento2 = 5;
cosole.log(++incremento2) //6
console.log(incremento2) //6

-Mesma coisa para decremento --x

-O + e - tenta transforma o valor seguinte em número

var frase = 'Isso é um teste';
+frase; //NaN
-frase; //NaN

var idade = 33;
+idade; // 28 (número positivo)
-idade; //-28 (número negativo)
console.log(+idade + 5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1

O - antes de um númeto torna ele negativo


*/

var modulo = 3872983892 % 3;
console.log(modulo)

var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN))

var testeNaN2 = '100' / 2;
console.log(isNaN(testeNaN2))

var soma1 = (10 + 10) + 20 + 30 * 4 / (2 + 10);
console.log(soma1);

var x = 5;
console.log(x--);
console.log(x);

var idade = '33';
var somaIdade = 5;

console.log(+idade + somaIdade)
