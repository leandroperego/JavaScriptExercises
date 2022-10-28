/*
	Enunciado:

	Crie um algoritmo para encontrar o índice de um item em uma lista especificada.

	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let lista = [1,2,3,4,5,6,7,8,9,10];

let tela = lista.join("-");
tela += "\n\nInforme o numero da lista que deseja saber o indice dele na lista:";
let numeroDesejado = +prompt(tela);

let indexDoNumero = lista.indexOf(numeroDesejado);
alert("O numero " + numeroDesejado + " esta no indice " + indexDoNumero);