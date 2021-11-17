const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')
const raiz = document.querySelector('.raiz')

const numeros:number[]=[]

function adicionaNumero(evento){
    evento.preventDefault()
    const numeroInput = form.querySelector('.numero')
    const numero = Number(numeroInput.value)
    numeros.push(numero)
    

}

function RaizQuadrada(){
    const raizes:number[]=[]
    numeros.forEach(n =>{
        raizes.push(Math.sqrt(n))
     })
     AdicionaResultado(raizes)
}

function AdicionaResultado(valores){
    resultado.innerHTML=` os números digitados são ${numeros}</br> As raizes quadradas são ${valores}` 
}

form.addEventListener('submit', adicionaNumero)

raiz.addEventListener('click', RaizQuadrada)