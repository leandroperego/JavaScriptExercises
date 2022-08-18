/*
	Enunciado:

	Crie um algoritmo que leia um número e mostre se o mesmo é positivo, negativo ou zero.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numero = Number(prompt("Informe um número:"));
let resultado;

if (numero <0){
	resultado = 'negativo';
} else if(numero == 0){
	resultado = 'zero';
} else{
	resultado = 'positivo';
}

console.log(`O número digitado é ${resultado}`);
