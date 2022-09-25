/*
	Enunciado:

	Crie um algoritmo que leia uma sequência de números terminada em zero e mostre para cada número lido se ele é primo ou não. 

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let continuar = true;
let arrayNumeros = [];

alert("Você irá informar alguns valores aleatórios e depois mostrarei cada número lido e se ele é primo ou não.");

let numero = +prompt("Digite um número:");
while (numero != 0){

	arrayNumeros.push(numero);
	numero = +prompt("Digite outro número: Caso queira interromper, digite 0");
}

for (var i = 0; i < arrayNumeros.length; i++) {
	if (ehPrimo(arrayNumeros[i])){
		console.log(`${arrayNumeros[i]} é primo.`);
	} else{
		console.log(`${arrayNumeros[i]} não é primo.`);
	}
}

function ehPrimo(numero){

	if (numero == 1){
		return false;
	}
	
	for (var i = 2; i < numero; i++) {
		if (numero % i == 0){
			return false; 
		}
	}
	return true;
}