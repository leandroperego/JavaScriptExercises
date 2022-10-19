/*
	Enunciado:

	Crie um algoritmo que leia um número, calcule e imprima o seu fatorial. 
	Lembre-se de que: 
	n! = n x (n -1) x (n - 2) x ... x 1  e que 0! = 1 e 1! = 1

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let numero = +prompt("Informe um número que irei te informar seu fatorial:");

console.log(`${numero}! = ${fatorial(numero)}.`);

function fatorial(numero){
	let fatorial = 1;

	if (numero != 0 && numero != 1){
		for (var i = numero; i >= 1; i--){
			fatorial *= i;
		}
	}

	return fatorial;
}