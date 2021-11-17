"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, Produto, QuantidadeEstoque, tipoProduto, precoVenda) {
        this.id = id;
        this.Produto = Produto;
        this.QuantidadeEstoque = QuantidadeEstoque;
        this.tipoProduto = tipoProduto;
        this.precoVenda = precoVenda;
    }
}
exports.Produto = Produto;
