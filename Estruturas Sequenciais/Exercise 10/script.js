/*
	Enunciado:

	Crie um algoritmo que calcule a área de um retângulo, sendo que os comprimentos da altura e da base são informados pelo usuário. 
	A área do retângulo é calculada multiplicando-se a altura pela base.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
alert("Iremos calcular a área de um retângulo!");

const altura = Number(prompt("Informe a altura do retângulo: (cm)"));
const base = Number(prompt("Informe a base do retângulo: (cm)"));

const area = altura * base;

console.log(`A área de um retângulo ${altura} x ${base} cm é igual a ${area.toFixed(2)} cm²`
			+ ` ou ${(area/10000).toFixed(2)} m²`);