/*
	Enunciado:

	Crie um algoritmo que calcule a área de um quadrado, sendo que o comprimento do lado é informado pelo usuário. 
	A área do quadrado é calculada elevando-se o lado ao quadrado.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

alert("Vamos calcular a área de um quadrado!");

const ladoQuadrado = Number(prompt("Informe a medida de um lado do quadrado: (cm)"));

const area = Math.pow(ladoQuadrado,2);

console.log("A área do quadrado é " + area + " cm²");