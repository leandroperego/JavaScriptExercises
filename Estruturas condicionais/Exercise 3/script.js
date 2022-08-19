/*
	Enunciado:

	Crie um algoritmo que leia dois números e mostre o maior número. 
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numA = Number(prompt("Digite primeiro número:"));
let numB = Number(prompt("Digite segundo número:"));

let resultado;

if(numA > numB){
	resultado = numA;
} else{
	resultado = numB
}

console.log("O maior número digitado foi o " + resultado);