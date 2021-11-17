"use strict";
class Pessoa {
    constructor(nome, dataNascimento, mae, pai) {
        this.nome = nome,
            this.dataNascimento = dataNascimento,
            this.mae = mae;
        this.pai = pai;
    }
}
const pai = new Pessoa('Tereza', new Date(1995, 11, 17));
const mae = new Pessoa('Carlos', new Date('30-06-1932'));
const eu = new Pessoa('Diego', new Date('28-02-1996'), pai, mae);
console.log('eu', eu);
