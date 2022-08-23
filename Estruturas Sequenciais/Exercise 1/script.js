/*
	Enunciado:

	Crie um algoritmo que receba, como entrada, o valor de três notas de um aluno - com valor entre 0 e 10, e, em seguida, informe a média entre elas. 
	Neste momento, não é necessário validar se a nota está dentro do intervalo válido!
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
const nota1 = +prompt("Informe nota 1:");
const nota2 = +prompt("Informe nota 2:");
const nota3 = +prompt("Informe nota 3:");

const media = (nota1 + nota2 + nota3) / 3;

console.log(`Nota 1: ${nota1}`); //template string
console.log(`Nota 2: ${nota2}`);
console.log(`Nota 3: ${nota3}`);
console.log(`Média: ${media.toFixed(2)}`);