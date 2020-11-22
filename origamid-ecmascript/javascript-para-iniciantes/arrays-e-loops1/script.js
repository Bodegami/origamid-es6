/*

Array

É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videogames = ['Switch', 'PS4', 'Xbox'];

Videogames[0] //Switch
Videogames[2] //Xbox

Acesse um elemento da array utilizando [n]
----------------------------------------------------------------------

Métodos e Propriedades de uma Array

var videogames = ['Switch', 'PS4', 'Xbox'];

videogames.pop(); //Remove o último item e retorna ele
videogames.push('3DS'); //Adiciona ao final do array
videogames.length; //3

Existem diversos outros métodos, como map, reduce, forEach e outros que veremos mais à frente
--------------------------------------------------------------------------

For Loop

Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero++) {
  console.log(numero)
}
//Retorna de 0 a 9 no console

O for loop possui 3 partes, início, condição e incremento
--------------------------------------------------------------------------

While Loop

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//Retorna de 0 a 9 no console

O for loop é o mais comum
----------------------------------------------------------------------------


*/

var videoGames = ['Switch', 'PS4', 'Xbox'];
console.log(videoGames);

var ultimoItem = videoGames.pop();
console.log(videoGames)

var novoItem = videoGames.push('3DS');
console.log(videoGames)

var quantosItensNoArray = videoGames.length;
console.log(quantosItensNoArray)

for (var numero = 0; numero < 10; numero++) {
  console.log(numero)
}

var i = 0;
while (i < 100) {
  console.log(i);
  i = i + 5;
}