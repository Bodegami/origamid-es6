/*

Escopo de Função

Variavéis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro)
};

mostrarCarro(); //Fusca no console
console.log(carro); //Erro, carro is not defined

Escopo evita o conflito entre nomes.
---------------------------------------------------------------------

Variável Global (Erro)

Declarar variáveis sem a palavra chave var, let ou const, cria uma variável que pode ser acessada em qualquer escopo (global).
Isso é um erro.

function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro)
};

mostrarCarro(); 
console.log(carro); 

//'use strict' impede isso.

'use strict'

function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro)
};

mostrarCarro(); 
console.log(carro); 

//Retorna um erro apontando que a variável carro não foi definida
//Dessa forma é possível evitar erros bobos
--------------------------------------------------------------------

Escopo de função (Pai)

Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro) //Fusca
-----------------------------------------------------------------------------

Escopo de Bloco

Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utlizando const ou let, pois estas repeitam o esocpo de bloco.

if (true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // carro
--------------------------------------------------------------------------------

Var Vaza o Bloco

Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined
---------------------------------------------------------------------------------

Const e Let no lugar de Var

A partir de agora vamos utilizar apenas const e let para declararmos variáveis.

if (true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); //Erro, carro is not defined
------------------------------------------------------------------------------

For Loop

Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.

for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); //10
------------------------------------------------------------------------------

For Loop com let

Com o let evitamos que o núemro vaze.

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); //i is not defined
_______________________________________________________________________________

Const

Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = 'Dezembro';
mes = 'Janeiro'; //erro, tentou modificar o valor
const semana; //erro, declarou sem valor

cosnt data = {
  dia: 28,
  mes: 'Dezembro',
  ano:2018,
}

data.dia = 29; //Funciona
data = 'Janeiro'; //erro

variáveis com valores constantes
---------------------------------------------------------------------------

Let

Mantém o escopo no bloco, impede a redeclaração, mas pertmite a modificação do valor da variável.

let = ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; //erro, redeclarou a variável

Geralmente vamos utilizar o const.
-------------------------------------------------------------------------



*/



function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro)
};

mostrarCarro(); 
//console.log(carro);  //Erro, variável não definida

if (true){
  var mes = 'Dezembro';
  console.log(mes)
}
console.log(mes) //Variável vazando do escopo do bloco

if (true) {
  let mes1 = 'Janeiro';
  console.log(mes1);
}
//console.log(mes1); //Usando o let a variável respeita o escopo do bloco

var i = 50;

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i * 10);

const semana = 'Sexta';

console.log(semana);

const data = {
  ano: 2020,
  mes: 'Novembro',
}

data.ano = 2021;
console.log(data.ano)

data.dia = 23;
console.log(data)