//Declarações e variáveis
//var, let e const

var nome="Fiap";
console.log(nome);

var nome="Teste";
console.log(nome);

if(true){
    let apelido="Fiapinho"
    console.log(apelido);
}

const taxaJuros=0.05;
console.log(taxaJuros);
// taxaJuros=1.5;

var exemplo1="ola-dev-var";
console.log(typeof exemplo1)
let exemplo2="ola-dev-let";
console.log(exemplo2)
const exemplo3="ola-dev-const";
console.log(exemplo3)

let exemplo4=10;
console.log(exemplo4)

let exemplo5=true;
console.log(exemplo5)

let exemplo6={nome1:"teste"};
console.log(exemplo6)

//valor undefined
let exemplo7;
console.log(exemplo7)

//valor vazio
let exemplo8=null;
console.log(exemplo8)

// OPERADORES ARITMÉTICOS

const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

// OPERADORES LÓGICOS
// == COMPARAÇÃO
// === VALOR E TIPO(estritamente igual)
// && = E (todas condições tem que ser verdadeiras)
// || = OU (uma das condições tem que ser verdadeira)

console.log(valor1 < valor2);
console.log(valor1 > 10 && valor2 < 10);
console.log(valor1 > 100 || valor2 < 10);
console.log(valor1 == valor2);
console.log(valor1 === valor2);

/*********************************************
*     Exercicio1
**********************************************/
const p=200;
const v=20;

const precoFinal= p - v;
console.log("O preço final com desconto é",precoFinal)

/*********************************************
*     Exercicio2
**********************************************/
let a=20;
let b=10;

let comparar= (a == 20 && b >= 10);
console.log("O Resultado é:", comparar)

/*********************************************
*     Exercicio3
**********************************************/
const usuariologado=20;
const tempotoken=10;

const transacao=(usuariologado ===20 && tempotoken >=10);
console.log("Transação Autorizada", transacao)