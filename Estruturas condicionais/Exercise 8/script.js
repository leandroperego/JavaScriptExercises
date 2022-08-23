/*
	Enunciado:

	Os endereços IP versão 4 são divididos em cinco classes: A, B, C, D e E. Os endereços no intervalo de 0 a 127 são classe A,
	de 128 a 191 são classe B, de 192 a 223 são classe C, de 224 a 239 são classe D e a partir de 240 são classe E. 
	Crie um algoritmo que leia o primeiro octeto, no formato decimal, de um endereço IP e informe a sua classe.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let octeto = Math.floor(+prompt("Digite o primeiro octeto do seu IP:"));
let classe;

if (octeto >= 240) classe = "E";
else if (octeto >= 224) classe = "D";
else if (octeto >= 192) classe = "C";
else if (octeto >= 128) classe = "B";
else if(octeto >= 0) classe = "A";
else classe = "Número negativo não é válido";

if (classe.length > 1) { // se o tamanho da string classe for > 1 (não ser apenas uma letra), retorna Numero negativo não é valido
	console.log(classe);
} 
else console.log(`Considerando o octeto ${octeto}, ele é considerado da classe ${classe}.`);
