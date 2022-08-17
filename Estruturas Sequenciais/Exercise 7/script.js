/*
	Enunciado:

	Crie um algoritmo que calcule a gorjeta a ser paga de uma conta de restaurante. 
	A gorjeta é calculada como sendo 10% do valor da conta, que deve ser informado pelo usuário.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
const valorConta = Number(prompt("Informe o valor total da conta: (R$)"));

const valorGorj = valorConta * 10/100;

console.log(`Valor da conta: 	R$${valorConta.toFixed(2)}`);
console.log(`Valor gorjeta:(10%) R$${valorGorj.toFixed(2)}`);
console.log(`Valor Total: 		R$${(valorConta + valorGorj).toFixed(2)}`);