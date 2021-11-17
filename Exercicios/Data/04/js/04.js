"use strict";
const fomrulario = document.querySelector('.formulario');
const btn_maior = document.querySelector('.btn-maior');
const Pessoas = [];
function adicionaPessoa(e) {
    e.preventDefault();
    const nome = document.querySelector('.nome').value;
    const idade = Number(document.querySelector('.idade').value);
    const pessoa = {
        nome: nome,
        idade: idade
    };
    Pessoas.push(pessoa);
    console.log(Pessoas);
}
fomrulario.addEventListener('submit', adicionaPessoa);
btn_maior.addEventListener('click', function (e) {
    if (validaListaPessoas) {
        const maiores = MaiorIdade(Pessoas);
        console.log('maiores', maiores);
        MostraResultado(maiores);
    }
    else {
        alert('Não existe pessoas cadastradas');
    }
});
function MostraResultado(valores) {
    const body = document.querySelector('body');
    for (let v of valores) {
        const divMaiores = document.createElement('div');
        body.appendChild(divMaiores);
        divMaiores.innerHTML = `${v.nome} ${v.idade}</br>`;
    }
}
function validaListaPessoas(peaople) {
    if (peaople.length)
        return true;
}
function MaiorIdade(p) {
    return p.filter(x => x.idade > 18);
}
