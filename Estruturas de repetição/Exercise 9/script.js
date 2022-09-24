/*
	Enunciado:

	Crie um algoritmo que informe se um número é primo ou não. Um número primo é aquele que é divisível por um e ele mesmo. 
	Por exemplo, 29 é um número primo.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numero = +prompt("Informe um número para saber se ele é primo ou não:");

console.log(ehPrimo(numero));

function ehPrimo(numero){
	for (var i = 2; i < numero; i++) {
		if (numero % i == 0){
			return (`O número ${numero} não é primo.`);
		} 
	}
	if (numero > 1){
		return (`O número ${numero} é primo.`);
	} else if(numero == 1 || numero == 0){
		return (`O número ${numero} não é primo.`);
	} else{
		return (`Número negativo.`);
	}
}