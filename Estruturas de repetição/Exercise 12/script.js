/*
	Enunciado:

	[ProjectEuler.net | Problema #1] Múltiplos de 3 e 5
	Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. 
	A soma desses múltiplos é 23. Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let soma = 0;

for (var i = 1; i < 1000; i++){
	if (i % 3 == 0 || i % 5 == 0){
		console.log(i);
		soma += i;
	}
}

console.log("Soma = " + soma);