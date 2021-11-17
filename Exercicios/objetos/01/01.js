function retornaExtenso(p) {
    var rua = p.rua, numero = p.numero, bairro = p.bairro, cidade = p.cidade, uf = p.uf;
    return "O usuario mora em " + cidade + "/" + uf + ", no bairro " + bairro + ", na rua," + rua + " com o numero " + numero;
}
var pessoa1 = {
    rua: 'Joao miguel da veiga',
    numero: 1234,
    bairro: 'centro',
    cidade: 'tocos do moji',
    uf: 'MG'
};
console.log(retornaExtenso(pessoa1));
