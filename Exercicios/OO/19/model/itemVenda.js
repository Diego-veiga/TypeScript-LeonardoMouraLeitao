"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVenda = void 0;
class ItemVenda {
    constructor(venda, produto, quantidadeItem) {
        this.quantidadeItem = quantidadeItem;
        this.subTotalItem = 0;
        this.idProduto = produto.id;
        this.idVenda = venda.id;
        this.precoItem = produto.precoVenda;
        this.Venda = venda;
        this.Produto = produto;
        this.QuantidadeItem = quantidadeItem;
        this.sequncia = this.retornaSequencia();
        this.subTotalItem = this.CalculaSubTotalitem();
        this.ValorDesconto = this.calculaDesconto();
        this.ValorTotalItem = this.calculaTotalItem();
    }
    get getValorTotalItem() {
        return this.ValorTotalItem;
    }
    retornaSequencia() {
        let sequencia = this.Venda.retornaQuantidadeItens();
        return this.sequncia = sequencia + 1;
    }
    CalculaSubTotalitem() {
        return this.QuantidadeItem * this.precoItem;
    }
    calculaTotalItem() {
        return this.ValorTotalItem = this.subTotalItem - this.ValorDesconto;
    }
    calculaDesconto() {
        if (this.quantidadeItem > 10)
            return this.ValorDesconto = (this.subTotalItem * 10) / 100;
        if (this.quantidadeItem > 20)
            return this.ValorDesconto = (this.subTotalItem * 20) / 100;
        if (this.quantidadeItem > 50)
            return this.ValorDesconto = (this.subTotalItem * 25) / 100;
    }
}
exports.ItemVenda = ItemVenda;
