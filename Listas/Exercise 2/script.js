/*
	Enunciado:

Crie um algoritmo que retorne o maior e o menor número de uma lista.
Dicas: 
Lembre-se de que, na primeira vez que o laço é executado, o maior e o menor número serão o primeiro número lido. 
É possível resolver este problema sem listas. 

	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
// let maior, menor;
// let numero;
// do{
// 	numero = +prompt("Informe um número para adicionar a lista: (Caso queira sair, digite 0):");

// 	if (numero == 0){
// 		break;
// 	}
// 	if(maior == undefined && menor == undefined){
// 		maior = numero;
// 		menor = numero;
// 	}

// 	if (numero > maior){
// 		maior = numero;
// 	}

// 	if (numero < menor){
// 		menor = numero;
// 	}

// } while(true);

// console.log(`O maior numero digitado foi ${maior}.`);
// console.log(`O menor numero digitado foi ${menor}.`);

//VERSAO COM LISTA:
let lista = [];
let numero;

do{
	numero = +prompt("Informe um número para adicionar a lista: (Caso queira sair, digite 0):");

	if(numero == 0){
		break;
	}

	lista.push(numero);

} while(true);

console.log(`O maior numero digitado foi ${Math.max(...lista)}.`);
console.log(`O menor numero digitado foi ${Math.min(...lista)}.`);