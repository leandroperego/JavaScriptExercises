/*
	Enunciado:

	Crie um algoritmo que, dada uma sequência de números, imprima-a na ordem inversa à da leitura. 
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let lista = [];
let numero;

do{
	numero = +prompt("Informe um número para adicionar a lista: (Caso queira sair, digite 0):");

	if (numero != 0){
		lista.push(numero);
	}

} while (numero != 0);

console.log(`Ordem informada: ${lista.join(" - ")}`);
console.log(`Ordem reversa: ${lista.reverse().join(" - ")}`);