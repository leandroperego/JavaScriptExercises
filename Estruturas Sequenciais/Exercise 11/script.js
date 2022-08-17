/*
	Enunciado:

	Crie um algoritmo que calcule a área de um círculo, sendo que o comprimento do raio é informado pelo usuário. 
	A área do círculo é calculada multiplicando-se pi e o raio ao quadrado.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

alert("Vamos calcular a área de um círculo!");

const raio = Number(prompt("Informe o raio do círculo: (cm)"));

const area = Math.PI * Math.pow(raio, 2);

console.log(`A área do círculo de raio igual a ${raio} cm é ${area.toFixed(2)} cm²`);