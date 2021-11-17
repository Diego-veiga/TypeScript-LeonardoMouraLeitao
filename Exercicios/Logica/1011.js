"use strict";
const PI = 3.14159;
function CalculaEsfera(raio) {
    const resultado = (4.0 / 3) * PI * (Math.pow(raio, 3));
    return resultado.toFixed(3);
}
console.log(CalculaEsfera(15));
