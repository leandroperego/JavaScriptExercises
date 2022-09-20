/*
	Enunciado:

	Crie um algoritmo que leia uma sequência de n números inteiros e mostre a soma, média, o maior número e o menor número da sequência.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let arrayNumeros = [];
var i = 0;
continuar = true;

while (continuar){
	arrayNumeros[i] = +prompt("Informe o número na posição " + (i+1) + ":");
	i++;
	
	continuar = confirm("Continuar?");
}

console.log(`Números digitados:${numerosDigitados(arrayNumeros)}`);
console.log(`Soma: ${somar(arrayNumeros)}`);
console.log(`Média: ${media(arrayNumeros).toFixed(2)}`);
console.log(`Maior: ${maiorNumero(arrayNumeros)}`);
console.log(`Menor: ${menorNumero(arrayNumeros)}`);


//------------------FUNÇÕES DO PROGRAMA-----------------------------------

function somar(array){
	let soma=0;

	for (var i = 0; i < array.length; i++){
		soma += array[i];
	}

	return soma;
}

function media(array){
	return somar(array) / array.length;
}

function maiorNumero(array){
	let maior = null;

	for (var i = 0; i < array.length; i++) {
		if (array[i] > maior || maior == null){
			maior = array[i];
		}
	}

	return maior;
}

function menorNumero(array){
	let menor = null;

	for (var i = 0; i < array.length; i++) {
		if (array[i] < menor || menor == null){
			menor = array[i];
		}
	}

	return menor;
}

function numerosDigitados(array){

	let stringNumeros = "";
	for (var i = 0; i < array.length; i++) {
		stringNumeros += " " + String(array[i]);
	}
	return stringNumeros;
}