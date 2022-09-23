/*
	Enunciado:

	Crie um algoritmo para mostrar a tabuada de 1 a 10.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

for (var i = 1; i<=10; i++){
	console.log("Tabuada do " + i + ":\n");

	for (var j = 1; j <= 10; j++) {
		console.log(i + "x" + j + "=" + i * j);
	}
	console.log("\n")
}