/* Parâmetros e Argumentos

Ao criar uma função, você pode definir parâmetros.
Ao executar uma função, você pode passar argumentos.

//peso e altura são parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(80, 1.70) // 80 e 1.70 são os argumentos

Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também
-------------------------------------------------------------------------------

Parênteses executa a função

function corFavorita(cor){
  if(cor === 'Azul'){
    return 'Você gosta de céu';
  } else if {
    return 'Voc~e gosta de mato';
  } else {
    'Você não gosta de nada';
  }
}
corFavorita(); //retorna 'Você não gosta de nada'

Se apenas definirmos a função com o function e não executarmos a mesma, ndada que dentro dela irá acontecer
--------------------------------------------------------------------

Argumentos podem ser funções 

Chamadas de Callback, geralmente são funções que ocorrem após algum evento

addEventListener('click', function() {
  console.log('Clicou');
});
//A função possui dois argumentos
//Primeiro é a string 'click'
//Segundo é uma função anônima

Funções anônimas são aquelas em que o nome da não é definido, escritas como function() {} ou () => {}


*/

function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(2))

function pi(){
  return 3.14;
}

var total = 5* pi()
console.log(total)

function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));
console.log(imc(50, 1.6));

function corFavorita(cor){
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de nada';
  }
}
console.log(corFavorita('verde'))

addEventListener('click', function() {
  console.log('Oi!');
} )

function mostraConsole() {
  console.log('Olá')
}

addEventListener('click', mostraConsole)