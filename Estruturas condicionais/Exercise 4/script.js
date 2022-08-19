/*
	Enunciado:

	Crie um algoritmo que leia três números e mostre o maior número.
	Desconsidere a hipótese de números iguais
	Considere-a, para um problema mais difícil.
 
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numA = Number(prompt("Informe o primeiro número:"));
let numB = Number(prompt("Informe o segundo número:"));
let numC = Number(prompt("Informe o terceiro número:"));

let resultado;

if (numA > numB && numA > numC){
	resultado = numA;
}else if (numB > numA && numB > numC) {
	resultado = numB;
}else{
	resultado = numC;
}

console.log(`O maior número informado dos números ${numA}, ${numB} e ${numC} é ${resultado}.`);