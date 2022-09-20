/*
	Enunciado:

	Crie um algoritmo que calcule a soma dos números de 1 a 100 (sem usar o método de Gauss, conhecido como “fórmula da Soma da PA”)
	(Gabarito: Dá 5050, pelo método de Gauss)

	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let soma = 0;

for (var i = 1; i <= 100; i++){
	soma += i;
}

console.log(`A soma dos números de 1 a 100 é igual a ${soma}`);