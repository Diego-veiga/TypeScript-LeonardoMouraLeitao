"use strict";
function atravessarRua(x, y, d) {
    let numeroPassos = 0;
    while (x <= y) {
        x += d;
        numeroPassos += 1;
    }
    return numeroPassos;
}
const resultado = atravessarRua(5, 40, 1);
console.log(resultado);
function atravessaRuaMelghorado(X, Y, Z) {
    let valor = ((Y - X) / Z);
    if (Number.isInteger(valor)) {
        return valor;
    }
    else {
        let valorCorreto = Math.floor(valor + 1);
        return valorCorreto;
    }
}
const resultados = atravessaRuaMelghorado(5, 40, 1);
console.log(resultados);
