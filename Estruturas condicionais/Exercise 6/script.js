/*
	Enunciado:

	Crie um algoritmo que leia um caractere e informe se o mesmo é uma vogal ou não.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
let letra = prompt("Digite uma letra: (letra minuscula)");

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
	console.log(`Letra "${letra}" é uma vogal.`);
} else{
	console.log(`Letra "${letra}" não é vogal.`);
}