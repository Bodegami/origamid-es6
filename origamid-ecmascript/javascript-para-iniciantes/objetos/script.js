/*
Objetos

Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissão: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; //'André'
pessoa.possuiFaculdade; // true

Propriedades e métodos consistem em nome(chave) e valor.
--------------------------------------------------------------------

Métodos

É uma propriedade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados: //4
quadrado.area(5); //25
quadrado.perimetro(5): //20

Abreviação de area: function() {} para area() {}. no ES6+.
-------------------------------------------------------------------

Organizar o Código

Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; //3.14
Math.random(); //número aleatório

var pi = Math.PI;
console.log(pi); //3.14

Math é um objeto nativo de javascript. Já percebeu que console é um objeto e log() é um método?
--------------------------------------------------------------------

Criar um objeto

Um objeto é criado utilizando as chaves {}
--------------------------------------------------------------------

Dot Notation Get

Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; //'#84E'
---------------------------------------------------------------------

Dot Notation Set

Substitua o valor de uma propriedade utlizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '84E',
}

menu.backgroundColor = '#000';
console.log(menu)
----------------------------------------------------------------------

Adicionar Propriedades e Métodos

Basta adicionar um novo nome e definir o valor.

var menu = ´{
  width: 800,
}
menu.height = 50;
menu.position = 'fixed';
-----------------------------------------------------------------------

Palavra-chave This

this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu.metadeHeight(); //25
// sem o this, seria 60

this irá retornar o próprio objeto
---------------------------------------------------------------------

Protótipo e Herança

O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  height: 800,
}

menu.hasOwnProperty('width') //true
menu.hasOwnProperty('height') //false

hasOwnProperty é método de Objetc



*/

var pessoa = {
  nome: 'Renato',
  sobrenome: 'Ferreira',
  idade: 33,
}

var quadrado = {
  lados: 4,
  area(lado) {                   //forma mais atual de escrever um método
    return lado * lado;
  },
  perimetro: function(lado) {     // forma antiga de escrever um método
    return this.lados * lado;
  },
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5))

console.log(Math.random)

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi')
}

var bg = menu.backgroundColor;
console.log(menu)

console.log(menu.hasOwnProperty('width'))
console.log(menu.hasOwnProperty('border'))


