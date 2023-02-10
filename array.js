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

// JUNCAO de dois arrays
const lista1 = ["matematica", "fisica", "quimica"];
const lista2 = ["Portugues", "geografia", "historia"];
const juncao = lista1.concat(lista2);

document.getElementById("teste").innerHTML = juncao;








