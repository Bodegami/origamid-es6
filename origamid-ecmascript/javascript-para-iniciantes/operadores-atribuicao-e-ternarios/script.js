
/*
Operadores de Atribuição

Podem funcionar com formas abreviadas

var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
--------------------------------------------------

Operador Ternário

Abreviação de condicionais if e else

var idade = 19; //Pode beber
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';

//condição ? true : false

Geralmente utilizado quando precisamos atribuir um valor para variável, dependendo de uma condição

Por padrão a condicional ternária retorna um valor booleano
exemplo:

var idade = 20;
var naoPossuiDiabetes = true;
podeBeber = (idade >= 18 && naoPossuiDiabetes)

o exemplo acima retorna true por padrão ou false
-------------------------------------------------------------------------

If Abreviado

Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;

if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

ou

if (possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculade');

É recomendado utilizar o seguno exemplo qauando precisamos retornar apenas uma linha de código
-------------------------------------------------------------------------





*/

var numero = 20;
var numero2 = 10;

numero = numero + 10;
console.log(numero);

numero2 += 10;
console.log(numero2)

var idade = 20;
var naoPossuiDiabetes = true;
var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber!' : 'Não pode beber!';
console.log(podeBeber)

var possuiFaculdade = true;

if(possuiFaculdade)
  console.log('Sim possui') //por padrão o js retorna apenas a primeira linha
  //console.log('Isso mesmo') // está linha é considerada fora do escopo da condicional
else
  console.log('Não possui');