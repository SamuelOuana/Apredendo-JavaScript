// LIGAR OU DESLIGAR UMA LAMPADA
// var interruptor = "on";
// if (interruptor == "on") {
//     alert('A lampada esta ligada');
// } else {
//     alert('A lampada esta desligada');
// }

// VERIFICACAO da HORA NO SITE PARA SAUDAR O USUARIO DE ACORDO COM A HORA
// var hora = new Date().getHours();
// if (hora < 12) {
//     alert('Bom dia');
// } else if (hora < 18) {
//     alert('Noa tarde');
// } else {
//     alert('Boa noite');
// }


// VERIFICACAO do Campo INPUT se esta ou nao VAZIO
function verificar() {
    let nome = document.getElementById("nome").value;
    if (nome == "" || nome == null) {
        let p = document.getElementById('teste');
        p.innerHTML = "O campo nao pode ser vazio!";
        p.style.color = "red";
    } else {
        let p = document.getElementById('teste');
        p.innerHTML = "Parabens tudo Certo!";
        p.style.color = "green";
    }
}