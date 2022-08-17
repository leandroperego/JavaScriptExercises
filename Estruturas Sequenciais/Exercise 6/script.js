/*
	Enunciado:

	Crie um algoritmo para calcular a média de duas notas digitadas pelo usuário, sendo que a segunda nota tem peso dois.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

const nota1 = Number(prompt("Informe a nota 1:"));

const nota2 = Number(prompt("Informe a nota 2:"));
const peso2 = 2;

const mediaPond = (nota1 + nota2 * peso2) / (1 + peso2);

console.log("Média Ponderada = " + mediaPond.toFixed(2));