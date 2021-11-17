"use strict";
class Pessoa {
    constructor(nome, Datanascimento, pai, mae, filho) {
        this.nome = nome;
        this.Datanascimento = Datanascimento;
        this.pai = pai;
        this.mae = mae;
        this.filho = filho;
        this.Nome = nome,
            this.DataNascimneto = Datanascimento,
            this.Pai = pai,
            this.Mae = mae;
        this.Filho = [];
    }
    adiconarPai(pai) {
        if (!this.Pai) {
            this.Pai = pai;
        }
        else {
            throw new Error('Pai ja cadastrado');
        }
    }
    adiconarMae(mae) {
        if (!this.Mae) {
            this.Mae = mae;
        }
        else {
            throw new Error('Mae ja cadastrado');
        }
    }
    RemoverPai() {
        if (this.Pai)
            this.Pai = undefined;
    }
    removerMae() {
        if (this.Mae)
            this.Mae = undefined;
    }
}
const tereza = new Pessoa('Terezinha', new Date(20 / 5 / 1963));
const joaoMigue = new Pessoa('Joao Migue', new Date(10 / 5 / 1935));
const zezinha = new Pessoa('Zezinha', new Date(25 / 5 / 1945));
tereza.adiconarMae(zezinha);
tereza.adiconarPai(joaoMigue);
console.log(tereza);
