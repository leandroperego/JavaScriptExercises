/*
	Enunciado:

	Uma eleição de um órgão profissional foi realizada e concorreram 5 chapas identificadas pelos números de 1 a 5.
	Crie um algoritmo que lê o número de votos de cada chapa, permitindo apenas números naturais e, ao final, 
	imprima os resultados, indicando quantos votos cada chapa recebeu e o percentual do total de votos equivalente, 
	indicando se deve haver segundo turno da eleição, e quais serão as duas chapas a concorrer no segundo turno caso
	alguma das chapas não consiga mais de 50% dos votos totais no primeiro pleito. 

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let chapas = [1,2,3,4,5];

let votos = [];

for (var i = 0; i < chapas.length; i++) {
	let qtdeVotos;

	do{
		qtdeVotos = +prompt("Informe a qtde de votos que a chapa " + (i+1) + " recebeu:");

		if (!validarNumero(qtdeVotos)){
			alert("Numero inválido. Informe um número que seja natural!");
		}

	} while(!validarNumero(qtdeVotos));

	votos.push(qtdeVotos);
}

for (var i = 0; i < chapas.length; i++) {
	console.log(`Chapa ${chapas[i]} recebeu ${votosRecebidos(chapas[i])} votos, equivalente a ${porcentagemVotos(chapas[i]).toFixed(2)}% dos votos.\n`);
}

if (haveraSegundoTurno()){
	console.log(`Nenhuma chapa eleita nesse primeiro turno. Haverá segundo turno entre Chapa ${segundoTurno(1)} e Chapa ${segundoTurno(2)}.`);
} else{
	console.log(`A chapa ${chapaVencedora()} venceu no 1º turno com ${porcentagemVotos(chapaVencedora()).toFixed(2)}% dos votos.`);
}

//------------------------FUNCTIONS------------------------------------
function validarNumero(numero){
	return numero >= 0 && (numero % 2 == 0 || numero % 2 == 1);
}

function votosRecebidos(chapa){
	// chapa 3

	let indexChapa = chapas.indexOf(chapa);

	return votos[indexChapa];
}

function totalDeVotos(){
	let soma = 0;
	votos.forEach(voto => soma += voto);

	return soma;
}

function porcentagemVotos(chapa){
	let indexChapa = chapas.indexOf(chapa);

	return (votos[indexChapa] * 100) / totalDeVotos();
}

function haveraSegundoTurno(){
	// retorna true or false
	// verificar se alguem recebeu mais do que 50% dos votos

	for (var i = 0; i < votos.length; i++) {
		if (votos[i] > (totalDeVotos() / 2)){
			return false;
		}
	}

	return true;
}

function chapaVencedora(){
	//retornara a chapa vencedora
	let indexVencedor = 0;
	let maior = -9999;

	votos.forEach(voto => {
		if (voto > maior){
			maior = voto;
			indexVencedor = votos.indexOf(voto);
		}
	});

	return chapas[indexVencedor];
}

function segundoTurno(chapa1ou2) {
	//retorna quem é o candidato da posicao escolhida. Possivel 1 e 2 apenas para segundo turno.
	// ex: posicao 1 retorn o primeiro candidato

	//vou pegar os 2 maiores votos
	let copiaListaDeVotos = [...votos];
	copiaListaDeVotos = copiaListaDeVotos.sort((numA, numB) => { return numB - numA });
	let votoMaior = copiaListaDeVotos[0];
	let segundoVotoMaior = copiaListaDeVotos[1];

	//lista com os dois candidatos
	let listaSegundoTurno = [];
	let indexVotoMaior = votos.indexOf(votoMaior);
	let indexSegundoVotoMaior = votos.indexOf(segundoVotoMaior);
	listaSegundoTurno.push(chapas[indexVotoMaior]);
	listaSegundoTurno.push(chapas[indexSegundoVotoMaior]);

	//retorno chapas
	return listaSegundoTurno[chapa1ou2 - 1];
}