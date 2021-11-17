import { ItemVenda } from './model/itemVenda';
import { Venda } from './model/Venda';
import { TipoProduto } from './enum/tipoProduto';
import { Produto } from './model/produtos';
import { Guid } from "guid-typescript";

const listaProduto:Produto[]=[]

const id1=Guid.create().toString()
const id2=Guid.create().toString()
const id3=Guid.create().toString()

const produtoLaranja = new Produto(id1,'Laranja',TipoProduto.organico,100,3.5)
const produtoCerveja = new Produto(id2,'Cerveja',TipoProduto.perecivel,5,10.90)
const produtoCarne = new Produto(id3,'Carne',TipoProduto.congelado,50,50.25)



listaProduto.push(produtoCarne)
listaProduto.push(produtoCerveja)
listaProduto.push(produtoLaranja)



const venda = new Venda()

const itenVenda1 = new ItemVenda(venda,produtoCarne,12)
const itenVenda2 = new ItemVenda(venda, produtoCerveja,4)
const itenVenda3 = new ItemVenda(venda, produtoLaranja,4)


venda.adicinaItem(itenVenda1)
// venda.adicinaItem(itenVenda2)
// venda.adicinaItem(itenVenda3)

venda.ValorTotalItens()
console.log(venda)
//venda.removerItem(itenVenda2)
console.log(venda)

