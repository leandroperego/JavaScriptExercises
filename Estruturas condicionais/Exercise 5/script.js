/*
	Enunciado:

	Crie um algoritmo que leia três números e mostre-os em ordem crescente.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numA = Number(prompt("Informe o primeiro número:"));
let numB = Number(prompt("Informe o segundo número:"));
let numC = Number(prompt("Informe o terceiro número:"));

let maior, meio, menor;

if (numA >= numB && numA >= numC){
	maior = numA;
	if (numB >= numC){
		meio = numB;
		menor = numC;
	} else{
		meio = numC;
		menor = numB;
	}
}

if(numB > numA && numB > numC ){
	maior = numB;
	if (numA >= numC){
		meio = numA;
		menor = numC;
	}else {
		meio = numC;
		menor = numA;
	}
}

if(maior == undefined){
	maior = numC;
	if(numA >= numB){
		meio = numA;
		menor = numB;
	} else{
		meio = numB;
		menor = numA;
	}
}

console.log("Número digitados:\n"
	+ "1º: " + numA + "\n"
	+ "2º: " + numB + "\n"
	+ "3º: " + numC);

console.log("Números em ordem crescente:\n"
	+ "1º: " + menor + "\n"
	+ "2º: " + meio + "\n"
	+ "3º: " + maior);
