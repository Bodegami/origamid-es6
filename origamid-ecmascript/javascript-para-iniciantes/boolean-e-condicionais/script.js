/* Condicionais Else If

Se o if não for verdadeiro, ele teste o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado);
} else if {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}

//retorna Possui Graduação, mas não doutorado
------------------------------------------

Truty e Falsy

//Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

Todo resto é truhty
----------------------------------------------

Operador lógico de Negação!

o operador !, nega uma operação booleana. Ou seja, !true é igual a false.

//Truthy
if(!true) //false
if(!1) //false
if(!'') //true
if(!undefined) //true
if(!!' ') //true
if(!!'') //false

Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy
-----------------------------------------------

Operadores de ccmparação

Vão sempre retornar um valor booleano

10 > 5; //true
5> 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

O == faz uma comparação não tão estrita e o === faz iuma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15 //true
10 != '10'; //false
10 !== '10'; //true
----------------------------------------------

Operadorss Lógicos &&
&& Compara se uma expressão e a outra é verdadeira

true && true; //true
true && false; //false
false && false; //false
'Gato' && 'Cão'; //'Cão'
(5 - 5) && (5 + 5); //0 ou false
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true

Se ambos os valores forem true ele irá retornar o último valor verificando
Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
-----------------------------------------------

Operadores Lógicos ||

|| Compara se uma expressão ououtra é verdadeira

true || true; //true
true || false; //true
false || true; //true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); //10
'Gato' || false; //Gato
(5 >= 5) || (3 < 6); //true

Retorna o primeiro valor true que encontrar
-----------------------------------------------

Switch

Com o switch você pode verificar se uma variável é igual à diferentes valors utilizando o case. Caso ele seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu')
    break;
  case 'Vermelho':
    console.log('Olhe para as rosas')
    break;
  case 'Amarelo':
    console.log('Olhe para o sol')
    break;
    
}


*/

var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao){
  console.log('É verdadeiro!');
}else if (possuiDoutorado){
  console.log('Possui Doutorado')
} else {
  console.log('Não possui nada')
}

var nome = 'Renato';

if((5 - 5) && (5 + 5)){
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

var condicional = (5 - 10) && (5 + 5);
if(condicional){
  console.log('Verdadeiro', condicional)
} else {
  console.log('Falso')
}


var condicional2 = (5 - 5) || (5 + 5) && (10 - 2)
console.log(condicional2)

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu')
    break;
  case 'Vermelho':
    console.log('Olhe para as rosas')
    break;
  case 'Amarelo':
    console.log('Olhe para o sol')
    break;
  case 'Verde': 
    console.log('Olhe para a floresta')
  default: 
    console.log('Feche os olhos')
    
}