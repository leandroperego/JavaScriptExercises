/*
	Enunciado:

	Crie um algoritmo que, dado um valor no sistema decimal, imprima a sua conversão para binário.
	Exemplo: Para 9, imprima 1001.


	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let valorInformado = +prompt("Informe um valor no sistema decimal:");

let valorBinario = parseInt(valorInformado, 10).toString(2);

console.log(valorBinario);