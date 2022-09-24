/*
	Enunciado:

	Crie um algoritmo que apresente a sequência de Fibonacci. A sequência começa com 0 e 1, e 
	então produz o próximo número de Fibonacci somando os dois anteriores para formar o próximo. 
	Por exemplo, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946...
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let limite = +prompt("Qual o limite:");
let resultadoTexto = "";
let sequenciaFibonacci = [0,1];

for (var i = 0; i < limite; i++) {
	sequenciaFibonacci.push(sequenciaFibonacci[i] + sequenciaFibonacci[i+1]);
}

for (var i = 1; i < sequenciaFibonacci.length; i++) {
	resultadoTexto += sequenciaFibonacci[i] + " ";
}
console.log(resultadoTexto);
