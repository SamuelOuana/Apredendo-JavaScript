// for (let i = 0; i < 10001; i++) {
//     document.getElementById("teste").innerHTML += i + ", ";
// }




var ano = new Date().getFullYear();

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value= '" + i + "'>" + i + "</option>";
}




const carros = ["markX", "ToyotaHZ", "fordGT", "alteza", "galardo", "BT50"];
var tamanho = carros.length;

for (i = 0; i < tamanho; i++) {
    document.getElementById("texto").innerHTML += carros[i] + ' - ';
}

// document.getElementById("texto").innerHTML = carros;