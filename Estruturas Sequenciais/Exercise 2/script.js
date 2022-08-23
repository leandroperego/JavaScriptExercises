/*
	Enunciado:

	Recrie o algoritmo de cálculo de média das notas, mas, desta vez, calcule a média ponderada, 
	sabendo que a primeira nota possui peso 1, a segunda nota possui peso 2 e a terceira nota possui peso 3.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
const nota1 = +prompt("Informe nota 1:");
const peso1 = 1;

const nota2 = +prompt("Informe nota 2:");
const peso2 = 2;

const nota3 = +prompt("Informe nota 3:");
const peso3 = 3;

const mediaPond = (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1 + peso2 + peso3);

console.log(`Média Ponderada: ${mediaPond.toFixed(2)}`);