/*
	Enunciado:

	Crie um algoritmo que calcule e mostre o novo valor de um salário a partir das seguintes regras: salários de até R$ 1.000,00 inclusive recebem 30% de aumento, 
	salários de até R$ 2.000,00 inclusive recebem 25%, salários de até R$ 3.000,00 inclusive recebem 20%, 
	salários de até R$ 4.000,00 inclusive recebem 15% e salários acima de R$ 4.000,00 recebem 10%. 
	
	Créditos: Exercícios propostos pelo prof. Luiz Paulo Maia - Instituto Infnet
*/

//Versão 1

let salario = +prompt("Digite o salário:");

const salarioAntigo = salario;

if (salario > 4000) salario += salario * 0.1; 
else if(salario > 3000) salario += salario * 0.15;
else if(salario > 2000) salario += salario * 0.20;
else if(salario > 1000) salario += salario * 0.25;
else salario += salario * 0.30;

/*Para descobrir o reajuste, eu fiz dessa forma abaixo, para treinar o raciocinio lógico
	com uma operação inversa, porém outra forma de código seria 
	o bloco de comentarios ao final.

	A fórmula consiste:
	Salário Novo = Salário Anterior + (Salario Anterior * Reajuste/100) FORMULA USADA LA NO IF ACIMA

	PORTANTO, Desmembrando a formula acima, visto que tenho o valor
	do Salario Novo e do Salario Anterior, uso as regras matemáticas para isolar o reajuste, na qual quero descobrir,
	e obtenho o valor dele com a formula utilizada abaixo.

*/
let reajuste = ((salario - salarioAntigo) / salarioAntigo) * 100;


console.log(`O novo salário reajustado é R$ ${salario.toFixed(2)}. \n
O reajuste foi de ${Math.floor(reajuste)}%`);

/*
	O CODIGO ACIMA É O MESMO QUE:

	if (salario > 4000) {
		salario += salario * 0.1;
		reajuste = 10;
	} else if(salario > 3000) {
		salario += salario * 0.15;
		reajuste = 15;
	} else if(salario > 2000) {
		salario += salario * 0.20;
		reajuste = 20;
	} else if(salario > 1000) {
		salario += salario * 0.25;
		reajuste = 25;
	} else {
		salario += salario * 0.30;
		reajuste = 30;
	}
*/