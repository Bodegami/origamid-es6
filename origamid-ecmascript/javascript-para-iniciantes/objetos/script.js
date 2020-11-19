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