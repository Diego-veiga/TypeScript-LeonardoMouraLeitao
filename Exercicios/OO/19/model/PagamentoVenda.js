"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoVenda = void 0;
class PagamentoVenda {
    constructor(id, valorPagamento, venda, pagamento) {
        this.id = id;
        this.valorPagamento = valorPagamento;
        this.venda = venda;
        this.pagamento = pagamento;
    }
}
exports.PagamentoVenda = PagamentoVenda;
