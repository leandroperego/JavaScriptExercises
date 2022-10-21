/*
	Enunciado:

	Crie um algoritmo que detecta se uma string é ou não um palíndromo.
	Um palíndromo é uma sequência de caracteres que lida igualmente da esquerda para a direita ou da direita para a esquerda.
	Exemplos: “ABBA”, “RACECAR”, “AMOR A ROMA”, “ SUBI NO ÔNIBUS” (sem contar os espaços e caracteres especiais…)
	Obs: Em python, o conceito de x[::-1] aplicável a listas e strings resolve o problema de maneira imediata, 
	mas não é solução ótima. 

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let string = prompt("Informe um texto para saber se é palíndromo:");

string = string.toLowerCase();
string = string.replace(/\s/g, '');

let contador = 0;
let isPalindromo = true;
while(contador != (string.length)){

	console.log(`${string[contador]} - ${string[string.length-(contador+1)]}`);
	
	if (string[contador] != string[string.length-(contador+1)]){
		isPalindromo = false;
	}
	contador++;
}

if (isPalindromo){
	console.log(`O texto "${string}" é um texto considerado Palíndromo!`);
} else{
	console.log(`O texto "${string}" não é um texto considerado Palíndromo!`);
}