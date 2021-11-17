"use strict";
class Vendedor {
    constructor(Id, nome, salariofixo, venda) {
        this.Id = Id;
        this.nome = nome;
        this.salariofixo = salariofixo;
        this.venda = venda;
        this.id = 0;
        this.Nome = '';
        this.salarioFixo = 0;
        this.Vendas = [];
        this.id = Id;
        this.Nome = nome;
        this.salarioFixo = salariofixo;
        this.Vendas = venda;
    }
    adicionarVenda(v) {
        this.Vendas.push(v);
    }
    calculaComissao() {
        const vendaDinhieiro = this.Vendas.filter((element) => element.TipoPagameto === TipoPagamento.Dinhiero);
        const valoresdevenda = vendaDinhieiro.map((element) => element.valorTotal);
        return valoresdevenda.reduce((total, element) => {
            return total + element;
        });
    }
    porcentagemVenda() {
        return this.calculaComissao() * 0.15;
    }
    salarioFinal() {
        return this.salarioFixo + this.porcentagemVenda();
    }
}
class Venda {
    constructor(TipoPagameto, vendedor) {
        this.TipoPagameto = TipoPagameto;
        this.vendedor = vendedor;
        this.ValorTotal = 0;
        this.TipoPagamento = 0;
        this.TipoPagamento = TipoPagameto;
        this.Vendedor = vendedor;
    }
    set valorTotal(valor) {
        if (valor > 0) {
            this.ValorTotal = valor;
        }
        else {
            throw new Error('o valor da venda deve ser maior que  0');
        }
    }
    get valorTotal() {
        return this.ValorTotal;
    }
}
var TipoPagamento;
(function (TipoPagamento) {
    TipoPagamento[TipoPagamento["Dinhiero"] = 0] = "Dinhiero";
    TipoPagamento[TipoPagamento["Cart\u00E3o"] = 1] = "Cart\u00E3o";
    TipoPagamento[TipoPagamento["cheque"] = 2] = "cheque";
})(TipoPagamento || (TipoPagamento = {}));
const vendasss = [];
const po = new Vendedor(1, 'Diego Veiga', 1000, vendasss);
const venda1 = new Venda(TipoPagamento.Dinhiero, po);
venda1.valorTotal = 150;
const venda2 = new Venda(TipoPagamento.Dinhiero, po);
venda2.valorTotal = 200;
const venda3 = new Venda(TipoPagamento.Cartão, po);
venda3.valorTotal = 800;
const v = [];
vendasss.push(venda1);
vendasss.push(venda2);
vendasss.push(venda3);
console.log(po.calculaComissao());
console.log(po.porcentagemVenda());
console.log(po.salarioFinal());
