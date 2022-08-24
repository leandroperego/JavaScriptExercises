/*
	Enunciado:

	Vide index.html

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let distancia = +prompt("Informe a distância do lançamento:");
let ponto;
if (distancia <= 800) {
	ponto = 1;
} else if(distancia <= 1400){
	ponto = 2;
} else if(distancia < 2000){
	ponto = 3;
}

console.log(ponto);
