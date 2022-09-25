/*
	Enunciado:

	Crie um algoritmo que informe se um número é primo ou não. Um número primo é aquele que é divisível por um e ele mesmo. 
	Por exemplo, 29 é um número primo.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numero = +prompt("Informe um número para saber se ele é primo ou não:");

for (var i = 2; i < numero; i++) {
	if (numero % i == 0){
		console.log((`O número ${numero} não é primo.`));
	} 
}

if (numero > 1){
	console.log((`O número ${numero} é primo.`));
} else if(numero == 1 || numero == 0){
	console.log((`O número ${numero} não é primo.`));
} else{
	console.log((`Número negativo.`));
}