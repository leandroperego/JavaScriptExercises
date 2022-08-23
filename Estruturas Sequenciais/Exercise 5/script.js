/*
	Enunciado:

	Um motorista deseja abastecer um valor X em reais, de combustível. 
	Escreva um algoritmo para ler o preço do litro do combustível e o valor que o motorista deseja abastecer. 
	Em seguida, informe quantos litros foram abastecidos.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
const quantia = +prompt("Informe a quantia disponivel em R$:");

const valorLitro = +prompt("Qual o valor do Litro em R$:");

console.log(`Total de Litros de combustivel abastecido: ${quantia / valorLitro} litros.`);