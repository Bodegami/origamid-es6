/*
Tudo é Objeto

Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos.Por isso são objetos.

var nome = 'Renato';

nome.length; //6
nome.charAt(1); // 'e'
nome.replace('Re', 'Ber '); //Bernato
nome; //'Renato'

Uma string herda propriedades e métodos do contrutor String()
--------------------------------------------------------------------------

Números

var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'

Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos
---------------------------------------------------------------------

Funções 

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; //1
--------------------------------------------------------------------

Elementos do DOM

<a class="btn">Clique</a>

var btn = document.querySelector('.btn');

btn.classList.add('azul') //adiciona a classe azul
btn.innerText; //'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

Praticamente todos os efeitos com JS são feitos utilziando o propriedades e métodos de objetos do DOM
-----------------------------------------------------------------------



*/

var nome = 'Renato';

console.log(nome.length);
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
console.log(nome.replace('Re', 'Ber'));
console.log(nome.charAt(4));

var num1 = 11.8;
var num2 = 11.3;

console.log(num1.toFixed());
console.log(num2.toFixed());
console.log(num1.toString());
console.log(typeof (num2.toString()));
console.log(typeof (num1));

console.log(addEventListener.length);

var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  console.log('Clicou')
})

console.log(btn.classList);
console.log(btn.classList.add('ativo'));


