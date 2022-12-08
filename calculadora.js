// parseInt - função que transforma em inteiro, por padrão o prompt retorna uma string
var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));

//pra controlar o simbolo que sera utilizado vamos fazer um laço de repetição

//while - repete a sentença enquanto o que tiver dentro do parenteses for verdadeiro
//do while - exibir um bloco de codigo e continuar exibindo de acordo com o while
do {
  var operacao = prompt("Digite a operação matemática: ");
} while (
  operacao != "+" &&
  operacao != "-" &&
  operacao != "*" &&
  operacao != "/"
);
//ou seja se as operações forem diferentes das de dentro do while ele vai repetir o "Digite a Operação Matematica"

var segundoValor = parseInt(prompt("Digite o segundo valor: "));

// vamos utilizar o switch case para determinar que de acordo com uma sentença o que vai acontecer em cada caso
var resultado = 0;

switch (operacao) {
  case "+":
    resultado = primeiroValor + segundoValor;
    alert(resultado);
    break;
  //break cancela o switch
  case "-":
    resultado = primeiroValor - segundoValor;
    alert(resultado);
    break;
  case "*":
    resultado = primeiroValor * segundoValor;
    alert(resultado);
    break;
  case "/":
    resultado = primeiroValor / segundoValor;
    alert(resultado);
    break;
}
