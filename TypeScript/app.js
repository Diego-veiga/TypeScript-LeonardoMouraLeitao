"use strict";
let canal = 'Youtube';
let inscritos = 987456;
const a = 'Teste TS';
console.log(a);
function soma(a, b) {
    return a * b;
}
let funcionario2 = {
    supervisores: ['maria', 'foda'],
    baterPontos(hora) {
        if (hora <= 8) {
            return 'dentro dohorário';
        }
        else {
            return 'fora do horario';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPontos(8));
let funcionario = {
    supervisores: ['ana', 'manuel'],
    baterPonto(hora) {
        if (hora < 8) {
            return 'dentro dohorário';
        }
        else {
            return 'fora do horario';
        }
    }
};
let meufuncionario = funcionario;
meufuncionario = {
    supervisores: ['tia', 'mãe'], baterPonto(hora) {
        return `ponto batido as ${hora}`;
    }
};
console.log(meufuncionario.supervisores);
console.log(meufuncionario.baterPonto(10));
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
/******************TIPOS INFERIDOS****/
//string
let nome = 'Minas';
console.log(nome);
//numericos
let idade = 27;
idade = 27.5;
console.log(idade);
//boolean
let possuiHobies = false;
console.log(possuiHobies);
/*************** TIPOS EXPLICIDOS **************/
let primeiroNome;
primeiroNome = 'Diego';
console.log(primeiroNome);
primeiroNome = 27.5;
console.log(primeiroNome);
// isso acontece porque  eu apenas declarei a variavel e depois atribui o valor
let segundoNome;
segundoNome = 'bia';
console.log(segundoNome);
// segundoNome=27
//ira ocorrer o erro devido eu ter colocado o tipo
let qualquerTipo;
qualquerTipo = 'Aline';
console.log(qualquerTipo);
qualquerTipo = 27;
console.log(qualquerTipo);
// o tipo any deixa vairavels er de qualquer tipo
/****ARRAY****** */
//posso ter tambem os tipos inferidos 
let hobbies = ['cozinhar', 'praticar esportes', 'ir ao parque'];
console.log(hobbies[0]);
//hobbies=[100,200,300]
//posso declarar um tipo
let atividade = ['cozinhar', 'praticar esportes', 'ir ao parque', 300];
console.log(atividade);
//array tipado
let nomes;
nomes = ['minas'];
//nomes=[78]
/**************tuplas */
//é array que pode guardar valores de variso tipos , porem deve ser na ordem declarada 
let endereco = ["Rua teste", 123, "sem complemento"];
console.log(endereco);
/*****ENUM */
var Cor;
/*****ENUM */
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["amarelo"] = 100] = "amarelo";
    Cor[Cor["verde"] = 101] = "verde";
})(Cor || (Cor = {}));
let colorido = Cor.cinza;
console.log('TRABALHANDO COM ENUM', colorido);
colorido = Cor.verde;
console.log('TRABALHANDO COM ENUM', colorido);
/****ANY ******/
//tonar a variavle  dinamicamente tipavel , posso declara-la como string e depois transformar me um objeto por exemplo
let carro = 'bmw';
console.log(carro);
carro = { macra: 'bmw', ano: 1996, tipo: 'chique' };
console.log(carro);
/*******************TIPOS DE FUNÇÕE************/
//tipando a função 
function RetornaNome() {
    return segundoNome;
}
console.log(RetornaNome);
//quando colcoamos void queremos dizer que a função não retorna nada 
function DizendoOI() {
    console.log('oi');
}
DizendoOI();
//tipagem de parametros 
function EscreverNome(nome) {
    return nome;
}
function Multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(Multiplicar(8, 9));
/****TIPO FUNCAO******/
let caculo;
caculo = Multiplicar;
console.log(caculo(1, 2));
/*********TIPOS OBJETOS *******/
let usuario = {
    nome: 'diego',
    idade: 27
};
usuario = {
    nome: 'bia',
    idade: 30
};
let usuarioTipado = {
    nome: ' diego',
    idade: 27
};
/*usuarioTipado={
    nome:'dom',
    idade:'47'
}*/
/*********CHECAGEM DOS TIPOS********** */
let peso = 'diego';
if (typeof peso === 'number') {
    console.log('Vaiavel é um numero');
}
else {
    console.log(`variavel é um ${typeof peso}`);
}
/**************UNION TYPES********* */
let doisTipos;
doisTipos = 78;
doisTipos = 'Diego';
//doisTipos=true
/********TIPO NEVER******* */
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'laranja',
    preco: 27.50,
    validarProduto() {
        if (this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter nome');
        }
        if (this.preco <= 0) {
            falha('preco invalido');
        }
    }
};
produto.validarProduto();
/**********TIPO NULL*******/
let num7 = 9;
let contato2 = {
    nome: 'Diego Veiga',
    tel1: '99794812',
    tel2: null
};
let Valornulo = null; // a vriavel vai ficar do tipo any
