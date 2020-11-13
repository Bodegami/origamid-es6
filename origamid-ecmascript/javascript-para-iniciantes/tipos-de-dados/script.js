/*
//Todos são primitivos exceto os objetos.

var nome = 'Renato'; // String
var idade = 33; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//Primitivos são dados imutáveis.
*/

var nome = 'Renato';
var sobrenome = 'Ferreira'
var idade = 33;
var time;
var time1 = null;
var simbolo = Symbol();
console.log(typeof nome, typeof idade, typeof time, typeof null, typeof simbolo)

var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto)

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase)
console.log(typeof frase)

var ano = '2020';
var mes = 8;
var anoMes = ano + mes;

console.log(anoMes)
console.log(typeof anoMes)

//Tipos de aspas para String

var frase1 = 'Esse é o "melhor" jogo';
console.log(frase1)

var frase2 = "Esse é o \"melhor\" jogo"; //o backslash( \ ) indica que as " " são um caracter especial, ao invés de fechar a string
console.log(frase2)

var frase3 = `Romário fez ${gols} gols`; //Utilizando template String
console.log(frase3);

frase3 = `Romário fez ${gols * 2} gols`; // também é possível fazer operações dentro da template string
console.log(frase3)



