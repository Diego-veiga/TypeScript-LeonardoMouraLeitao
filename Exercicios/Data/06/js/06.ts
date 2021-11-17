const formulario = document.querySelector('.formulario')
const resultado = document.querySelector('.resultado')
const inverter = document.querySelector('.inverter')

const nomes:string[]=[]
formulario.addEventListener('submit', function(e){
    e.preventDefault()
    
    let inputNome = document.querySelector('.nome')
    let nome = inputNome.value
    if(ValidaCampo(nome)){
        nomes.push(nome)
    }else{
        alert('Por favor preencha o campo')
    }
    console.log(nomes)
    inputNome.nodeValue=" "

})

inverter.addEventListener('click', function(e){
    inverterVetor(nomes)

})
function MostraResultado(vetorInvertido:string[]):void{
    resultado.innerHTML =''
    console.log('vetorInvertido',vetorInvertido)
    for( let v of vetorInvertido){
        console.log('v',v)
        resultado.innerHTML +=` ${v} `
    }
    
}

function inverterVetor(vetor:string[]):void{
    console.log('vetor',vetor)
    const vetorInvertido = vetor.reverse()
    MostraResultado(vetorInvertido)
}


function ValidaCampo(campo:string):boolean{
    if(campo){
        return true
    }else{
        return false
    }
}

