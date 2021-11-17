const form = document.querySelector('.formulario')
const calcular = document.querySelector('.btn-calcular')
const numeros:number[]=[]



form.addEventListener('submit',function(e){
    e.preventDefault()
    const numero:number = Number(document.querySelector('.numero').value)
    
    
    numeros.push(numero)
    console.log(numeros)
    return numeros

    

})

calcular.addEventListener('click', function(){
   const NumeroMaior:number= maiorNumero(numeros)
   adicionaResultado(NumeroMaior)

})

function adicionaResultado(valor):void{
    const resultado= document.querySelector('.resultado')
    resultado.innerHTML =` o maior numero digitado é: ${valor}`
}



function maiorNumero(valores:number[]):number{
    let maior:number=0
     for(let valor of valores){
         if(valor > maior){
             maior=valor
         }
     }
     return maior

}
