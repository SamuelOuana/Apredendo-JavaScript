function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: " + cor;
    }
}

function diaDaSemana() {
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("teste2").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            document.getElementById("teste2").innerHTML = "Hoje é Segunda-feira";
            break;
        case 2:
            document.getElementById("teste2").innerHTML = "Hoje é Terça-feira";
            break;
        case 3:
            document.getElementById("teste2").innerHTML = "Hoje é Quarta-feira";
            break;
        case 4:
            document.getElementById("teste2").innerHTML = "Hoje é Quinta-feira";
            break;
        case 5:
            document.getElementById("teste2").innerHTML = "Hoje é Sexta-feira";
            break;
        case 6:
            document.getElementById("teste2").innerHTML = "Hoje é Sabado";
            break;
        default:
            document.getElementById("teste2").innerHTML = "Nao sei que dia é...";
    }
}