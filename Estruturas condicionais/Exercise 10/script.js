/*
	Enunciado:

	Crie um algoritmo que valide uma data, formada por dia, mês e ano. 
	Por exemplo, a data 30/02 é sempre inválida; mas a data 29/02/2012 é válida.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let dia = +prompt("Informe o dia (dd):");
let mes = +prompt("Informe o mês (MM):");
let ano = +prompt("Informe o ano (yyyy):");

let ehBissexto = false;
let diasNoMes = 30;
let avancar = true;

if (mes > 12 || mes < 1){
	avancar = false;
	console.log("Data inválida. Verifique o mês informado");
}

if (avancar){
	if (mes != 2){
		if (mes == 1 || mes == 3 || mes == 5 || mes == 7){
			diasNoMes = 31;
		} else if (mes == 8 || mes == 10 || mes == 12){
			diasNoMes = 31;
		}
	}

	/*-------------------------------------------------------
		Ano é considerado bissexto todos aqueles que são multiplos de 4, que tambem não são
		múltiplos de 100, com excessão dos multiplos de 400.
	*/
	if (ano % 4 == 0){
		if (ano % 400 == 0 || ano % 100 != 0){
			ehBissexto = true;
		}
	}
	//-------------------------------------------------------

	if (mes == 2){
		if (ehBissexto){
			diasNoMes = 29;
		} else {
			diasNoMes = 28;
		}
	}

	//TUDO ACIMA SÓ CONDIÇÕES, AGORA ABAIXO PARA VERIFICAR SE A DATA É VALIDA

	if (dia > diasNoMes){
		console.log("Data inválida. Verifique o dia informado.");
	}else{
		console.log("Data válida!");
	}
}
