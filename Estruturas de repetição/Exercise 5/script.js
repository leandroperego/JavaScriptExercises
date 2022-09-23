/*
	Enunciado:

	Crie um algoritmo que leia um intervalo inferior e superior, e mostre os números primos existentes no intervalo. 
	Por exemplo, o algoritmo recebe 5 e 10, e mostra como saída 5 e 7. Além disso, o algoritmo deve mostrar a quantidade 
	de números primos encontrados no intervalo.
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1
confirm("Direi a você os números primos existentes no intervalo que você informar.");
alert("Nós próximos 2 prompts, informe o intervalo minimo e máximo.");
let minimo = +prompt("Informe o inicio:");
let maximo = +prompt("Informe o final do intervalo:");

let arrayNumerosPrimos = [];

for (var i = minimo; i <= maximo; i++) {
	if (ehPrimo(i)){
		arrayNumerosPrimos.push(i);
	}
}

if(arrayNumerosPrimos.length > 0){
	console.log(`Total de números primos encontrados no intervalo de ${minimo} e ${maximo} foram de ${arrayNumerosPrimos.length}.`);
	console.log(`Os números considerados primos do intervalo de ${minimo} e ${maximo} foram: ${listagemNumerosPrimos(arrayNumerosPrimos)}.`);
} else{
	console.log(`No intervalo informado não foram encontrados números primos. São todos números compostos.`);
}


// ----------------------------------------------FUNCTION------------------------------------------------------------------

function ehPrimo(numero){

	for (var divisor = 2; divisor < numero; divisor++) {

		if (numero % divisor == 0) {
			return false;
		}
	}
	return true; 	
}

function listagemNumerosPrimos(array){
	let stringListagem = "";
	for (var i = 0; i < array.length; i++) {
		stringListagem += " " + String(array[i]);
	}
	return stringListagem;
}