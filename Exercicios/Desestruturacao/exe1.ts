const user ={
    nome:'Diego',
    Sobrenome:'Veiga',
    dataNascimento:'2020-02-29',
    endereco:{
        rua:'Joao Miguel da Veiga',
        numero:600,
        cep:'13211-120',
        cidade:'tocos do Moji',
        UF: 'MG'
    },
    robies:['Correr', 'programar']
}


const {nome, Sobrenome, dataNascimento, endereco:{rua:nomeRua}} = user


console.log(`${nome}, ${Sobrenome}, ${dataNascimento}, ${nomeRua}`)