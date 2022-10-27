/*
	Enunciado:

	Crie um algoritmo que remova duplicatas de uma lista.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let lista = [];
let numero;

do{
	numero = +prompt("Informe um número para adicionar a lista: (Caso queira sair, digite 0):");

	if (numero != 0){
		lista.push(numero);
		lista.push(numero);
	}

} while (numero != 0);

console.log(`Lista informada com valores duplicados: ${lista.join(" - ")}`);

let listaSemRepeticoes = [...new Set(lista)];
console.log(`Lista sem valores duplicados com o metodo x: ${listaSemRepeticoes.join(" - ")}`);