type Pessoa = {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    uf: string
}
function retornaExtenso(p: Pessoa): string {
    const { rua, numero, bairro, cidade, uf } = p

    return `O usuario mora em ${cidade}/${uf}, no bairro ${bairro}, na rua,${rua} com o numero ${numero}`
}


const pessoa1: Pessoa = {
    rua: 'Joao miguel da veiga',
    numero: 1234,
    bairro: 'centro',
    cidade: 'tocos do moji',
    uf: 'MG'
}

console.log(retornaExtenso(pessoa1))