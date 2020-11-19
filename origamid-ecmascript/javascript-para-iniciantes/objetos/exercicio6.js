//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome

var pessoa = {
  nome: 'Renato',
  sobrenome: 'Ferreira',
}

//Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}
console.log(pessoa.nomeCompleto())

//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro)

//Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver um homem

var cachorro = {
  raça: 'labrador',
  cor: '#000',
  idade: 10,
  latir(pessoa) {
    if (pessoa == 'homem') {
      return 'Latir';
    } else {
      return 'nada';
    }
  }
}
console.log(cachorro.latir("homem"))