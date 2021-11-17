"use strict";
class Aluno {
    constructor(Nome, Nota) {
        this.Nome = Nome;
        this.Nota = Nota;
        this.id = this.random(),
            this.nome = Nome;
        this.notas = this.Nota;
    }
    random(min = 0, max = 1000) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    calculaMedia() {
        let total = this.notas.reduce((total, n) => total += n);
        this.media = total / 4;
        return this.media;
    }
    alteraSatus() {
        if (this.media > 6) {
            this.status = Status.aprovado;
        }
        else if (this.media > 4 && this.media < 5.9) {
            this.status = Status.verificacaoSuplementar;
        }
        else {
            this.status = Status.reprovado;
        }
        return this.status;
    }
}
var Status;
(function (Status) {
    Status[Status["aprovado"] = 1] = "aprovado";
    Status[Status["verificacaoSuplementar"] = 2] = "verificacaoSuplementar";
    Status[Status["reprovado"] = 3] = "reprovado";
})(Status || (Status = {}));
const a = new Aluno('Diego', [10, 7, 8, 6]);
console.log(a.calculaMedia());
console.log('status', a.alteraSatus());
