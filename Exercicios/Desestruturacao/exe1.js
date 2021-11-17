var user = {
    nome: 'Diego',
    Sobrenome: 'Veiga',
    dataNascimento: '2020-02-29',
    endereco: {
        rua: 'Joao Miguel da Veiga',
        numero: 600,
        cep: '13211-120',
        cidade: 'tocos do Moji',
        UF: 'MG'
    },
    robies: ['Correr', 'programar']
};
var nome = user.nome, Sobrenome = user.Sobrenome, dataNascimento = user.dataNascimento, nomeRua = user.endereco.rua;
console.log(nome + ", " + Sobrenome + ", " + dataNascimento + ", " + nomeRua);
