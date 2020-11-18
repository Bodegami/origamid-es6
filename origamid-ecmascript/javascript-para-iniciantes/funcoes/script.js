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
--------------------------------------

Pode ou não retornar um valor

Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independete de existir valor de return ou não.
----------------------------------------------

Ecopo

Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises.`
}
console.log(totalPaises); // erro, totalPaises nõo definido
---------------------------------------------------------------------------

Escopo Léxico

Funções conseguem acessar variavéis que foram criadas no contexto pai

var profissao = 'Designer';

function dados() {
  var nome = 'Renato';
  var idade = '33';

  function outrosDados() {
    var endereço = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados();
}
dados(); // Retorna 'Renato, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna erro 
---------------------------------------------------------------------

Hoisting

Antes de execitar uma função, o JS 'move' todas as funções declaradas para a memoria

imc(80, 1.80); //imc aparece no console

function imc(peso, altura) {
  cosnt imc = peso / (altura ** 2);
  console.log(imc);
}
-------------------------------------------------------------------------
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

function imc2(peso, altura){
  var imc = peso / (altura * altura);
  console.log(imc);
}
imc2(20, 1.8);

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
  
console.log(terceiraIdade(60))

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

