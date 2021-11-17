"use strict";
const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    try {
        const dataInput = document.querySelector('.data').value;
        if (!dataInput) {
            throw new Error('Por favor digite uma data valida');
        }
        const data = new Date(dataInput);
        separaData(data);
    }
    catch (error) {
        alert(error);
    }
});
function separaData(data) {
    const dataSeparada = [];
    const ano = data.getFullYear();
    dataSeparada.push(ano);
    const mes = data.getMonth() + 1;
    dataSeparada.push(mes);
    const dia = data.getDate();
    dataSeparada.push(dia);
    mostraResultado(dataSeparada);
}
function mostraResultado(DataSeparada) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    resultado.innerHTML += ` Ano: ${DataSeparada[0]}<br> Mes:${DataSeparada[1]}<br> Dia:${DataSeparada[2]}`;
}
