// function activarContagem() {
// document.getElementById('tempo').innerHTML = 'Comecou a contar';
// tempo = setTimeout(function () {
//     document.getElementById('tempo').innerHTML = 'Executou o setTimeOut';
// }, 5000);
// }


// function pararContagem() {
//     clearTimeout(tempo);
//     document.getElementById('tempo').innerHTML = 'Parou a Contagem';
// }

function activarContagem() {
    setInterval(function () {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma == 0) {
            document.getElementById('tempo').innerHTML = 'Tempo esgotado';
            pararContagem();
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }

    }, 1000);
}

function pararContagem() {
    clearInterval(tempo);
    // document.getElementById('tempo').innerHTML = 'Parou a Contagem';

}