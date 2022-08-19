/*
	Enunciado:

	Crie um algoritmo que leia um número e mostre se o mesmo é par ou ímpar.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numero = Number(prompt("Digite um número pra saber se ele é par ou impar:"));
let resultado;

if (numero % 2 == 0){
	resultado = 'par';
} else{
	resultado = 'impar';
}

console.log("O número " + numero + " é " + resultado);