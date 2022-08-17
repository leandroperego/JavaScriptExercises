/*
	Enunciado:

	Crie um algoritmo que calcule o novo valor de um salário a partir de um valor percentual de reajuste. 
	O valor atual do salário e o valor percentual do reajuste devem ser informados pelo usuário como, por exemplo, 7,3%.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let salario = Number(prompt("Informe o salário:"));

const reajuste = Number(prompt("Porcentagem de reajuste: (%)"));

console.log(`Salário antigo: R$${salario.toFixed(2)}`);
console.log(`Porcentagem de reajuste: ${reajuste.toFixed(2)}%`);

console.log(`Salário reajustado: R$${(salario += salario * reajuste/100).toFixed(2)}`);