//Por qual motivo o código abaixo retorna com erros?
/*
 {
   var cor = 'Preto';
   const marca = 'Fiat';
   let portas = 4;
 }
 console.log(cor, marca, portas);
 R: Por que as variáveis marca e portas respeitam o escopo do bloco, enquanto a chamada vem de fora do bloco
 //Solução: colocar o console.log dentro do escopo de bloco
 */

 //Como corrigir o erro abaixo?
const dois = 2;

 function somarDois(x) {
  //const dois = 2;
  return x + 2;
 }
 function dividirDois(x) {
   //const dois = 2;
   return x / dois;
 }
 console.log(somarDois(4))
 console.log(dividirDois(6))

 //A função dividirDois está chamando uma variável do escopo de outra função, por isso acusa erro
 //A solução é criar um váriavel de bloco na fução dividirDois ou melhor ainda, criar um variável fora do escopo de função, uma variável global.

 //O que fazer para total retornar 500;

 var numero = 50;

 for (var numero = 0; numero < 10; numero++) {
   console.log(numero);
 }
 const total = numero * 10;
 console.log(total)

 //Apenas alterando o "var numero" do for Loop para "let numero" e o "var numero" fora do loop para "const numero"; 