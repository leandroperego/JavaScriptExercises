/*
	Enunciado:

	Crie um algoritmo que recebe um valor de temperatura em Celsius e o converte para Fahrenheit. 
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
const tempC = +prompt("Informe a temperatura em Celsius:");

const faren = tempC * 9 / 5 + 32;

console.log(`${tempC}ºC => ${faren}ºF`);