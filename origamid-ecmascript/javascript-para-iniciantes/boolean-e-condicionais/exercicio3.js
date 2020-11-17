// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var minhaIdade = 33;
var meuParente = 56;

if (minhaIdade > meuParente) {
  console.log('É maior');
} else if (minhaIdade === meuParente) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

if (expressao) {
  console.log('Expressão verdadeira', expressao)
} else {
  console.log('Expressão falsa')
}

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //verdadeiro
var idade = 28; //verdadeiro
var possuiDoutorado = false; //falso
var empregoFuturo; //falso
var dinheiroNaConta = 0; //falso

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 207e10;
var china = 1340e10;

if (brasil > china) {
  console.log('O Brasil tem mais habitantes do que a China: ', brasil)
} else {
  console.log('A China tem masis habitantes do que o Brasil: ', china)
}

//O que irá aparecer no console?
if (('Gato' === 'gato') && (5 - 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// retorna falso, pois 'Gato' é diferente de 'gato' e o operador && demanda que as duas condições retornem verdadeiro

//Oque irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão') 
} else {
  console.log('Falso')
}

//retorna verdadeiro pois o operador || só precisa que uma condição seja verdadeira, printando 'Cão', pois o operador && retorna o último valor verdadeiro