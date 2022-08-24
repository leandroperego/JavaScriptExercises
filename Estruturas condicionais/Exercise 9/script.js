/*
	Enunciado:

	Crie um algoritmo que receba um número inteiro, que representa um determinado mês do ano, e mostre o nome do mês correspondente. 
	Por exemplo, se for informado o número 2, algoritmo deverá exibir fevereiro. O algoritmo deve validar se a entrada está correta.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let numeroMes = +prompt("Digite o número de um mês do ano:");
let mes;

if (numeroMes > 12 || numeroMes < 1) {
	console.log("Número inválido. Tente novamente.");
} else {
	switch (numeroMes){
		case 1 :
			mes = `Janeiro`;
			break;
		case 2 :
			mes = `Fevereiro`;
			break;
		case 3 :
			mes = `Março`;
			break;
		case 4 :
			mes = `Abril`;
			break;
		case 5 :
			mes = `Maio`;
			break;
		case 6 :
			mes = `Junho`;
			break;
		case 7 :
			mes = `Julho`;
			break;
		case 8 :
			mes = `Agosto`;
			break;
		case 9 :
			mes = `Setembro`;
			break;
		case 10 :
			mes = `Outubro`;
			break;
		case 11 :
			mes = `Novembro`;
			break;
		case 12 :
			mes = `Dezembro`;
			break;		
	}
	console.log(`O mês ${numeroMes} representa o mês de ${mes}.`);
}