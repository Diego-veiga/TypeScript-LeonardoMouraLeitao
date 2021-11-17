
const form = document.querySelector('.form')
const operadores = ['+','-','*','/']

form.addEventListener('submit', function(e){
    e.preventDefault()

    const n1= Number(document.querySelector('.numero1').value)
    const n2= Number(document.querySelector('.numero2').value)
    criaTabela(n1, n2)

   
     
})

function criaTabela(numero1 , numero2){
    const resultado = document.querySelector('.resultado')
    let table = document.createElement('table')
    table.classList.add('table')
    const trTitle = document.createElement('tr')
    const th1 = document.createElement('th')
    const th2 = document.createElement('th')
    trTitle.appendChild(th1)
    trTitle.appendChild(th2)
    th1.innerHTML =`Operação`
    th2.innerHTML =`Valor`

    
    const colunaOperacao = document.createElement('td')
    const colunaValor = document.createElement('td')

    for ( let o of operadores){

       const linhaOperacao =criaLinhaOperacao(numero1, numero2,o)
       colunaOperacao.appendChild(linhaOperacao)
      
        const linhaValor = criaLinhaValor(numero1, numero2,o)
        colunaValor.appendChild(linhaValor)
    }

    table.appendChild(trTitle)
    table.appendChild(colunaOperacao)
    table.appendChild(colunaValor)
    resultado.appendChild(table)
}



function criaLinhaOperacao(numero1, numero2, o){
    const trOperacao = document.createElement('tr')
    trOperacao.innerHTML =`${numero1} ${o} ${numero2}`
    return trOperacao
}

function criaLinhaValor(numero1, numero2, o){
    const trValor = document.createElement('tr')
    trValor.innerHTML =`${operacao(numero1, numero2,o)}`
    return trValor
}

function operacao(numero1, numero2, operador){
    let result
        switch(operador){
        
            case '+' :
                result = numero1 + numero2
                break;
            case '-':
                result = numero1 - numero2
                break;
            case '*':
                result = numero1 * numero2
                break;
            case '/':
                result = numero1  /numero2
                break;
                
        }
        return result.toFixed(2)

}