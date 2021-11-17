"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemVenda_1 = require("./model/itemVenda");
const Venda_1 = require("./model/Venda");
const tipoProduto_1 = require("./enum/tipoProduto");
const produtos_1 = require("./model/produtos");
const guid_typescript_1 = require("guid-typescript");
const listaProduto = [];
const id1 = guid_typescript_1.Guid.create().toString();
const id2 = guid_typescript_1.Guid.create().toString();
const id3 = guid_typescript_1.Guid.create().toString();
const produtoLaranja = new produtos_1.Produto(id1, 'Laranja', tipoProduto_1.TipoProduto.organico, 100, 3.5);
const produtoCerveja = new produtos_1.Produto(id2, 'Cerveja', tipoProduto_1.TipoProduto.perecivel, 5, 10.90);
const produtoCarne = new produtos_1.Produto(id3, 'Carne', tipoProduto_1.TipoProduto.congelado, 50, 50.25);
listaProduto.push(produtoCarne);
listaProduto.push(produtoCerveja);
listaProduto.push(produtoLaranja);
const venda = new Venda_1.Venda();
const itenVenda1 = new itemVenda_1.ItemVenda(venda, produtoCarne, 12);
const itenVenda2 = new itemVenda_1.ItemVenda(venda, produtoCerveja, 4);
const itenVenda3 = new itemVenda_1.ItemVenda(venda, produtoLaranja, 4);
venda.adicinaItem(itenVenda1);
// venda.adicinaItem(itenVenda2)
// venda.adicinaItem(itenVenda3)
venda.ValorTotalItens();
console.log(venda);
//venda.removerItem(itenVenda2)
console.log(venda);
