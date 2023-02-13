var item1 = "arroz";
var item2 = "feijao";
var item3 = "macarrao";
var item4 = "leite";

// const lista = ["arroz", "feijao", "macarrao", "leite"];
// alert(lista[0]);

// const lista = [];
// lista[0] = "arroz";
// lista[1] = "feijao";
// lista[2] = "macarrao";
// lista[3] = "leite";

// const lista = new Array("arroz", "feijao", "macarrao", "leite");

// let x = lista[3];
// alert(x);

// mudanca de um elemento no Array
// lista[0] = "cafe";
// alert(lista[0]);

// diferenca entre ARRAY e OBJECTO
const pessoa = ["Samuel", "Manuel", "Ouana", 23, "estudante"]; //ARRAY

const Pessoa = { nome: "Samuel", sobreNome: "Manuel", apelido: "Ouana", idade: 23 }; // OBJECTO

// ACRESCENTAR um elemento no ARRAY
// pessoa.push("Mocambicano");
// pessoa[pessoa.length] = "Solteiro";

// console.log(pessoa);

// Pegar um elemento no Array
pessoa[0];

// Pegar um elemento no Objecto
Pessoa.nome;

// Pegar o ULTIMO elemento no Array
// alert(pessoa[pessoa.length - 1]);

// como saber se uma variavel eh um Array
// alert(Array.isArray(Pessoa));
// alert(Array.isArray(pessoa));

// como colocar algo entre os elementos do Array
// document.getElementById("teste").innerHTML = pessoa.join(" - ");

// REMOVER o ultimo elemento do Array
// pessoa.pop();

// REMOVER o primiro elemento do Array
//  pessoa.shift();

// ADICIONAR um elemento na ultima posicao do Array
// pessoa.push("Inteligente");

// ADICIONAR um elemento na Primeira posicao do Array
//  pessoa.unshift("Inteligente");

// JUNCAO de arrays
const lista1 = ["matematica", "fisica", "quimica"];
const lista2 = ["Portugues", "geografia", "historia"];
const juncao = lista1.concat(lista2);

// document.getElementById("teste").innerHTML = juncao;

const jogadores = ["Benzema", "Ramos", 'Messi', 'Neymar', "Ronaldo", "Mbappe", "Torres", "Samuel"];

//Mostrar os Elementos do array que preciso usando intervalos
const craques = jogadores.slice(2, 6);
document.getElementById("teste").innerHTML = craques;

//Mostrar os Elementos do array em ORDEM CRESCENTE (LETRAS)
const ordem = jogadores.sort();
document.getElementById("teste").innerHTML = ordem;

//Mostrar os Elementos do array em ORDEM DECRESCENTE (LETRAS)
jogadores.sort();
jogadores.reverse();
document.getElementById("teste").innerHTML = ordem;

//Mostrar os Elementos do array em ORDEM CRESCENTE (NUMEROS)
const numeros = [17, 8, 30, 1, 7, 3, 20, 25];
numeros.sort(function (a, b) { return a - b });
document.getElementById("teste").innerHTML = numeros;

//Mostrar os Elementos do array em ORDEM DECRESCENTE (NUMEROS)
numeros.sort(function (a, b) { return b - a });
document.getElementById("teste").innerHTML = numeros;

// mostrar o MAIOR NUMERO do array
function maiorNumero(array) {
    return Math.max.apply(null, array);
}
// document.getElementById("teste").innerHTML = maiorNumero(numeros);

// mostrar o MENOR NUMERO do array
function menorNumero(array) {
    return Math.min.apply(null, array);
}
document.getElementById("teste").innerHTML = menorNumero(numeros);

// mostrar os NUMERO MAIORES que 10 do array
const Numeros = [17, 8, 30, 1, 7, 3, 20, 25];
const maiores10 = Numeros.filter(filtragem);

function filtragem(value, index, array) {
    return value > 10;
};
document.getElementById("teste").innerHTML = maiores10;










