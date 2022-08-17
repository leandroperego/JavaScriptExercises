/*
	Enunciado:

	Crie um algoritmo que recebe o valor da altura e do peso de uma pessoa e retorna seu IMC. 
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
const altura = Number(prompt("Informe sua altura (m):"));

const peso = Number(prompt("Informe seu peso: (kg)"));

const imc = peso / Math.pow(altura,2);

console.log("Seu IMC é de " + imc.toFixed(2));