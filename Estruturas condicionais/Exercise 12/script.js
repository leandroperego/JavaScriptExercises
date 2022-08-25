/*
	Enunciado:

	(Python Brasil) Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário o valor do saque e depois 
	informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 2, 5, 10, 20, 50 e 100, 200 reais. 
	O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a 
	quantidade de notas existentes na máquina.
	Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
	Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let valorSaque = +prompt("Informe o valor a sacar:");
let validacao = true;
let qtoFalta = valorSaque;

let nota1, nota2, nota5, nota10, nota20, nota50, nota100, nota200;

if (valorSaque < 10 || valorSaque > 600){
	console.log("O valor de R$ " + valorSaque.toFixed(2) + " não é válido. O valor de saque permitido é acima de R$10,00 e até R$600,00");
	validacao = false;
}

if (validacao){
	nota200 = Math.floor(qtoFalta / 200);
	qtoFalta %= 200;
	//qtoFalta -= nota200 * 200;
	nota100 = Math.floor(qtoFalta / 100);
	qtoFalta %= 100;
	//qtoFalta -= nota100 * 100;
	nota50 = Math.floor(qtoFalta / 50);
	qtoFalta %= 50;
	//qtoFalta -= nota50 * 50;
	nota20 = Math.floor(qtoFalta / 20);
	qtoFalta %= 20;
	//qtoFalta -= nota20 * 20;
	nota10 = Math.floor(qtoFalta / 10);
	qtoFalta %= 10;
	//qtoFalta -= nota10 * 10;
	nota5 = Math.floor(qtoFalta / 5);
	qtoFalta %= 5;
	//qtoFalta -= nota5 * 5;
	nota1 = Math.floor(qtoFalta);
	qtoFalta %= 1;

	console.log(`Para sacar o R$${valorSaque}, o programa fornecerá a seguinte quantidade das notas:\n
		+ Notas de R$200,00:\t ${nota200}
		+ Notas de R$100,00:\t ${nota100}
		+ Notas de R$50,00:\t ${nota50}
		+ Notas de R$20,00:\t ${nota20}
		+ Notas de R$10,00:\t ${nota10}
		+ Notas de R$5,00:\t ${nota5}
		+ Notas de R$1,00:\t ${nota1} `);
}