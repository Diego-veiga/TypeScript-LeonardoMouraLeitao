"use strict";
/*let contaBancaria ={
    saldo:3456,
    depositar(valor){
        this.saldo+= valor
    }
}

let conrrentista ={
    nome: 'Diego Veiga',
    contaBancaria: contaBancaria,
    contatos: ['3456456','5263987415']
}*/
let contaBancaria1 = {
    saldo: 250,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let correntista1 = {
    nome: 'Diego Veiga',
    contaBancaria: contaBancaria1,
    contato: ['minas', 'dom', 'douglas']
};
console.log(correntista1.nome);
console.log(correntista1.contaBancaria.depositar(100));
console.log(correntista1.contato);
