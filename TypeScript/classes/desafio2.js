"use strict";
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
        this.nome = nome;
    }
    buzinar() {
        console.log('TOOOOOOOT');
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
    retornaVelocidade() {
        return this.velocidade;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.retornaVelocidade());
moto.acelerar(35);
console.log(moto.retornaVelocidade());
/**** exercicio2*****/
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    Area() {
        return this.altura * this.base;
    }
}
const retangulo = new Retangulo(2, 3);
console.log('Area Reatangulo', retangulo.Area());
/****Exercico***** */
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get nome() {
        return this._primeiroNome;
    }
    set nome(nome) {
        this._primeiroNome = nome;
    }
}
const est = new Estagiario();
est.nome = 'Diego';
console.log(est.nome);
