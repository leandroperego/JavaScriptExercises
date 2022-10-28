/*
	Enunciado:

	Crie um algoritmo que analise duas listas e informe quantos e quais elementos elas possuem em comum. 
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lista2 = [2, 4, 6, 8, 10, 1, 25, 36, 9];

let listaComRepetidos = novaListaComElementosEmComum(lista1, lista2);

console.log(`Total de elementos em comum: ${verificarQuantosElementosEmComum(listaComRepetidos)}`);
console.log(`Elementos em comum: ${retornarElementosSemRepeticoes(listaComRepetidos)}`);

//------------------------FUNCTIONS-----------------------------------------------

function novaListaComElementosEmComum(listaA, listaB){

let listaEmComum = [];

	for (var i = 0; i < listaA.length; i++) {
		for (var j = 0; j < listaB.length; j++) {
			if (listaA[i] == listaB[j]){
				listaEmComum.push(listaA[i]);
			}
		}
	}

	return listaEmComum;
}

function verificarQuantosElementosEmComum(lista){
	return lista.length;
}

function retornarElementosSemRepeticoes(lista){

let listaSemRepeticoes = [];
let naoContem = true;
let contador = 0;

while (contador < lista.length){
	let valorAcomparar = lista[contador];

	for (var i = (contador + 1); i < lista.length; i++) {
		if (valorAcomparar == lista[i]){
			naoContem = false;
			break;
		}
	}

	if (naoContem){
		listaSemRepeticoes.push(valorAcomparar);
	}

	contador++;

}

return listaSemRepeticoes;
}
