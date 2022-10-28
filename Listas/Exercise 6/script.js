/*
	Enunciado:

	Crie um algoritmo que analise uma lista de números aleatórios e informe quantos e quais elementos são um quadrado perfeito.
Dica: Lembre-se de que elevar um número a ½ retorna sua raiz quadrada
Pesquise a função .floor() de Python

	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let tamanhoArray = +prompt("Informe a quantidade de numeros que serão sorteados:");
let lista = listaComNumerosAleatorios(tamanhoArray);
let listaComOsQuadPerfeitos = listaComNumerosComQuadPerfeito(lista);

console.log(lista.join(" - "));

if (!listaComOsQuadPerfeitos.length == 0){
	console.log(`Existem ${listaComOsQuadPerfeitos.length} elementos que são quadrados perfeitos.`);
	console.log(`Os numeros que são quadrados perfeitos: ${listaComOsQuadPerfeitos.join(" - ")}`);
} else{
	console.log(`Não há numeros na lista acima que são quadrados perfeitos.`);
}


//---------------------FUNCTIONS-----------------------------------

function listaComNumerosAleatorios(tamanhoDaLista){

let lista = [];

	for (var i = 0; i < tamanhoDaLista; i++) {
		lista.push(Math.floor(Math.random() * 1000));	
	}
	return lista;
}

function tamanhoLista(lista){
	return lista.length;
}

function listaComNumerosComQuadPerfeito(lista){

let listaRetorno = [];

	for (var i = 0; i < lista.length; i++) {
		if (quadradoPerfeito(lista[i])){
			listaRetorno.push(lista[i]);
		}
	}

return listaRetorno;
}

function quadradoPerfeito(numero){
	let raizDoNumero = Math.pow(numero, 0.5);
	return raizDoNumero % 2 == 0 || raizDoNumero % 2 == 1;
}