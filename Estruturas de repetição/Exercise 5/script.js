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

	let condicaoEhPrimo1 = numero == 2;
	let condicaoEhPrimo2 = numero == 3;
	let condicaoEhPrimo3 = numero == 5;
	let condicaoEhPrimo4 = numero == 7;
	let condicaoEhPrimo5 = numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0;
	let condicaoEhPrimo6 = !(numero == 1);

	if ((condicaoEhPrimo1 || condicaoEhPrimo2 || condicaoEhPrimo3 || condicaoEhPrimo4) || (condicaoEhPrimo5 && condicaoEhPrimo6)){
		return true;
	} else{
		return false;
	}

// -------------CODIGO ABAIXO, POR MENOS VERBOSO QUE SEJA, LEVA UM TEMPO BEM MAIOR DE EXECUCAO PARA NUMEROS GRANDES----------
	// for (var divisor = 2; divisor < numero; divisor++) 
 	//    if (numero % divisor == 0) return false;
 	//    return true;
 //--------------------------------------------------------------------------------------------------------------------------
}

function listagemNumerosPrimos(array){
	let stringListagem = "";
	for (var i = 0; i < array.length; i++) {
		stringListagem += " " + String(array[i]);
	}
	return stringListagem;
}