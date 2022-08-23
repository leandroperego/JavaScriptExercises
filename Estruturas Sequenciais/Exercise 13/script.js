/*
	Enunciado:

	Crie um algoritmo que calcule o volume de uma caixa d’água cilíndrica, sendo que os comprimentos do raio e a 
	altura são informados pelo usuário. O volume é calculado multiplicando-se pi, o raio ao quadrado e a altura.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

alert("Vamos calcular o volume de uma caixa d’água cilíndrica!");

const raio = +prompt("Informe o raio da caixa: (m)");
const altura = +prompt("Informe a altura da caixa: (m)");

const volume = Math.PI * Math.pow(raio, 2) * altura;

console.log(`O volume da caixa d’água é ${volume.toFixed(2)} m³, ou ${(volume * 1000).toFixed(2)} litros`);