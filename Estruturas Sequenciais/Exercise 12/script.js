/*
	Enunciado:

	Crie um algoritmo que calcule a área de uma esfera, sendo que o comprimento do raio é informado pelo usuário.
	A área da esfera é calculada multiplicando-se 4 vezes pi e o raio ao quadrado

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

alert("Vamos calcular a área de uma esfera!");

const raio = Number(prompt("Informe o comprimento do raio da esfera: (cm)"));

const area = 4 * Math.PI * Math.pow(raio, 2);

console.log(`A área da esfera de raio ${raio} cm é igual a ${area.toFixed(2)} cm²`);