/*
	Enunciado:

	Uma progressão aritmética é uma sequência numérica em que cada termo, a partir do segundo, 
	é igual a soma do termo anterior com uma constante. A constante é calculada como sendo a diferença entre o segundo 
	e o primeiro número. Crie um algoritmo que receba dois números inteiros e, a partir dessa informação, 
	gere uma sequência em progressão aritmética.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

alert("Criarei uma progressão aritmética a partir de 2 números iniciais que você informar nos próximos prompts");
let primeiroNumero = +prompt("Informe o primeiro número:");
let segundoNumero = +prompt("Informe o segundo número:");

let constanteProgressao = segundoNumero - primeiroNumero;
let progressaoAritmetica = [primeiroNumero, segundoNumero];
let resultadoTexto = `${primeiroNumero},${segundoNumero}`;

for (var i = 0; i < 20; i++) {
		progressaoAritmetica.push(progressaoAritmetica[i+1] + constanteProgressao);
		
		resultadoTexto += "," + progressaoAritmetica [i+2];
}

console.log(resultadoTexto + "...");

if (progressaoAritmetica[progressaoAritmetica.length - 1] == progressaoAritmetica[0]){
	console.log("Temos acima um Progressão Aritmética Constante.");
} else if (progressaoAritmetica[progressaoAritmetica.length - 1] > 0){
	console.log("Temos acima um Progressão Aritmética Crescente.");
} else {
	console.log("Temos acima um Progressão Aritmética Decrescente.");
}