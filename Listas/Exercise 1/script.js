/*
	Enunciado:

	Crie um algoritmo que calcule a soma e o produto de todos os itens de uma lista.

*/

//Versão 1
const lista = [];
let soma = 0;
let multiplicacao = 1;
let numero;

do{
	numero = +prompt("Informe um número para adicionar a lista: (Caso queira sair, digite 0):");

	if(numero != 0){
		lista.push(numero);
		soma += numero;
		multiplicacao *= numero;
	}

} while(numero != 0);

console.log(`Números digitados: ${lista.join(" - ")}`);
console.log(`A soma desses números é igual a ${soma}.`);
console.log(`O produtos desses números é igual a ${multiplicacao}.`);
