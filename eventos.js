function eventoClick() {
    // alert('Acionou um evento de click');
    document.body.style.backgroundColor = 'green';
}

function eventoDblClick() {
    alert('Evento de clique Duplo');
}

function viraVermelho() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'red';
}

function viraAzul() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'blue';
}

// function adicionaTexto() {
//     let p = document.getElementById('texto');
//     p.append('O mouse moveu <br>');
// }


function limpaTexto() {
    document.getElementById('campoTexto').value = " ";
}

function mudou() {
    console.log('Mudou');
}

// function teclaPressionada() {
//     let input = document.getElementById('campoTexto').value;
//     console.log(input);
// }

// function teclaPressionada2() {
//     let input = document.getElementById('campoTexto').value;
//     console.log(input);
// }

// function teclaPressionada3() {
//     let input = document.getElementById('campoTexto').value;
//     console.log(input);
// }

// function teclaPressionada3() {
//     console.log('Tecla Pressionada');
// }