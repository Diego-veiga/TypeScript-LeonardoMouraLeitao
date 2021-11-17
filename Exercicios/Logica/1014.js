"use strict";
function ConsumoCarro(KmPercorrigo, combustivelGasto) {
    return KmPercorrigo / combustivelGasto;
}
console.log(ConsumoCarro(500, 35.00).toFixed(3));
class Car {
    constructor(KmPercorrigo, combustivelGasto) {
        this.KmPercorrigo = KmPercorrigo;
        this.combustivelGasto = combustivelGasto;
    }
    ConsumoCarro() {
        return this.KmPercorrigo / this.combustivelGasto;
    }
}
const c = new Car(2254, 124.4);
const resultadoooo = c.ConsumoCarro();
console.log(resultadoooo.toFixed(3));
function Distancia(x1, x2, y1, y2) {
    const distancia = Math.sqrt(Math.pow((x2 - x1), 2) - Math.pow((y2 - y1), 2));
    return distancia;
}
console.log('Distancia', Distancia(1, 7, 5, 9).toFixed(4));
