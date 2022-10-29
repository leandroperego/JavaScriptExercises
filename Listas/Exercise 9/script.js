/*
	Enunciado:

	Crie um algoritmo que leia e armazene em listas distintas o nome, a idade e o sexo (letra M ou letra F) de 5 pessoas. 
Após povoar as listas, o algoritmo deve fornecer um relatório informando: 
- Quantas mulheres existem no grupo. 
- Quantos homens existem no grupo. 
- A média de idade dos homens. 
- A média de idade das mulheres. 
- O homem mais velho. 
- A mulher mais nova. 
- A pessoa mais velha de todo o grupo, seja homem ou mulher. 
- A pessoa mais nova de todo o grupo, seja homem ou mulher.


	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let listaNomes = [];
let listaIdade = [];
let listaSexo = [];

for (var i = 0; i < 5; i++) {
	let tela = "PESSOA " + (i+1) + ":\n";
	let nome = prompt(tela + "Nome:");
	let idade = prompt(tela + "Idade:");
	let sexo = prompt(tela + "Sexo: (M/F)");

	listaNomes.push(nome);
	listaIdade.push(idade);
	listaSexo.push(sexo);
}

console.log(`Foram informados ${qtdeSexo("F")} mulheres.`);
console.log(`Foram informados ${qtdeSexo("M")} homens.`);
console.log(`A média de idade das mulheres é ${mediaIdade("F")} anos.`);
console.log(`A média de idade dos homens é ${mediaIdade("M")} anos.`);
console.log(`O homem mais velho é o ${maisVelho("M")}.`);
console.log(`A mulher mais jovem é a ${maisNovo("F")}.`);
console.log(`A pessoa mais velha informado é ${maisVelho()}.`);
console.log(`A pessoa mais jovem informado é ${maisNovo()}.`);


//-----------------------FUNCTIONS-----------------------

function qtdeSexo(sexo){
	let contador = 0;
	for (var i = 0; i < listaSexo.length; i++) {
		if (listaSexo[i] == sexo){
			contador++;
		}
	}
	return contador;
}

function mediaIdade(sexo){
	let listaComOsIndices = listaComIndices(sexo);
	let soma = 0;
	let qtde = listaComOsIndices.length;

	for (var i = 0; i < listaComOsIndices.length; i++) {
		soma += +listaIdade[listaComOsIndices[i]];
	}

	return soma / qtde;
}

function maisVelho(sexo){
	let listaComOsIndices = listaComIndices(sexo);

	let maisVelho = listaIdade[listaComOsIndices[0]];

	for (var i = 1; i < listaComOsIndices.length; i++) {

		if (maisVelho < listaIdade[listaComOsIndices[i]]){
			maisVelho = listaIdade[listaComOsIndices[i]];
		}
	}

	return listaNomes[listaIdade.indexOf(maisVelho)];
}

function maisNovo(sexo){
	let listaComOsIndices = listaComIndices(sexo);

	let maisNovo = listaIdade[listaComOsIndices[0]];

	for (var i = 1; i < listaComOsIndices.length; i++) {

		if (maisNovo > listaIdade[listaComOsIndices[i]]){
			maisNovo = listaIdade[listaComOsIndices[i]];
		}
	}

	return listaNomes[listaIdade.indexOf(maisNovo)];
}

function listaComIndices(sexo){
	let lista = [];

	for (var i = 0; i < listaSexo.length; i++) {
		if (listaSexo[i] == sexo || sexo == undefined){
			lista.push(i);
		}
	}
	return lista;
}