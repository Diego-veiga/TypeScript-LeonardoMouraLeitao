"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo_item = void 0;
class Emprestimo_item {
    constructor(Emprestimo, Livro) {
        this.Livro = Livro;
        this.Emprestimo = Emprestimo;
        this.IdEmprestimo = Emprestimo.getID();
        this.IdLivro = Livro.getID();
        this.dataEmprestimoItem = new Date();
    }
    DataDevolucao() {
        const periodoEmprestimo = this.Livro.DiasEmprestimo();
        this.dataDevolucaoItem = new Date(this.dataEmprestimoItem.getTime() + (periodoEmprestimo * 24 * 60 * 60 * 1000));
    }
}
exports.Emprestimo_item = Emprestimo_item;
