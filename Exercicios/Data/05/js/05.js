"use strict";
const form = document.querySelector('.form');
const apurar = document.querySelector('.btn-apurar');
var Sexo;
(function (Sexo) {
    Sexo[Sexo["masculino"] = 1] = "masculino";
    Sexo[Sexo["feminino"] = 2] = "feminino";
})(Sexo || (Sexo = {}));
const Pessoas = [];
const PessoasMasculinas = [];
const PessoasFemininas = [];
form.addEventListener('submit', function (e) {
    e.preventDefault();
    pegaValoresFormulario();
    console.log(Pessoas);
});
function adicionaPessoa(pessoa) {
    Pessoas.push(pessoa);
}
function pegaValoresFormulario() {
    const nome = form.querySelector('.nome').value;
    const ComboSexo = form.querySelector('#sexo');
    const sexoIndex = ComboSexo.options[ComboSexo.selectedIndex].index;
    const altura = Number(form.querySelector('.altura').value);
    if (!validaCampos(nome, altura)) {
        alert('preencha todos os campos');
        return;
    }
    let sexo;
    switch (sexoIndex) {
        case 1:
            sexo = Sexo.masculino;
            break;
        case 2:
            sexo = Sexo.feminino;
            break;
        default:
            sexo = Sexo.masculino;
    }
    CriaPessoa(nome, altura, sexo);
}
function CriaPessoa(nome, altura, sexo) {
    const pessoa = {
        nome,
        altura,
        sexo
    };
    adicionaPessoa(pessoa);
}
function CriaResultado() {
    const divResultado = document.createElement('div');
    return divResultado;
}
apurar.addEventListener('click', function () {
    const div = CriaResultado();
    div.innerHTML = '';
    const numeroMulheres = retornaMulheres(Pessoas);
    const numeroHomens = retornaHomen(Pessoas);
    div.innerHTML = `Numero de mulheres:${numeroMulheres}<br> Numero de homens:${numeroHomens}<br>`;
    const body = document.querySelector('body');
    body.appendChild(div);
});
function validaCampos(...campos) {
    for (let c of campos) {
        if (!c) {
            return false;
        }
        else {
            return true;
        }
    }
}
function retornaMulheres(p) {
    const resultadoMulheres = p.filter(x => x.sexo === Sexo.feminino);
    return resultadoMulheres.length;
}
function retornaHomen(p) {
    const resultadoHomen = p.filter(x => x.sexo === Sexo.masculino);
    return resultadoHomen.length;
}
