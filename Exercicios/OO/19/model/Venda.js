"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
const guid_typescript_1 = require("guid-typescript");
class Venda {
    constructor() {
        this.Id = this.geraid();
        this.itens = [];
    }
    get id() {
        return this.Id;
    }
    geraid() {
        return guid_typescript_1.Guid.create().toString();
    }
    adicinaItem(item) {
        item.retornaSequencia();
        this.itens.push(item);
        this.ValorTotalItens();
    }
    retornaQuantidadeItens() {
        return this.itens.length;
    }
    ValorTotalItens() {
        const totalItens = this.itens.reduce((total, item) => {
            return total += item.getValorTotalItem;
        }, 0);
        this.subtTotal = totalItens;
        console.log('this.subtTotal', this.subtTotal);
        return this.subtTotal = totalItens;
    }
    removerItem(item) {
        const itemRemover = this.itens.indexOf(item);
        this.itens.splice(itemRemover, 1);
        this.ValorTotalItens();
    }
}
exports.Venda = Venda;
