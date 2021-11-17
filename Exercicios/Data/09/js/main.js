const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const salario = Number(document.querySelector('.salario').value)
    const salarioReajustado =calculaReajustae(salario)
    mostraResultado(salario, salarioReajustado)
    

})

function calculaReajustae(salario){
    if(salario<=280) return salario += salario*0.20
    else if(salario > 280 && salario<=700) return salario += salario*0.15
    else if(salario>700 && salario<=1500) return salario += salario*0.10
    else  return salario += salario*0.05   
}


function mostraResultado(salario ,salarioReajustado ){
    const resultado = document.createElement('div')
    const body = document.querySelector('body')
    body.appendChild(resultado)
    resultado.innerHTML=''
    const aumento = salarioReajustado - salario
    const porcentagem = Calculaporcentagem(aumento,salario)
    resultado.innerHTML +=`Salario antes do reajuste: ${salario}<br> Porcentagem aplicada: ${(porcentagem *100).toFixed(0)} <br>Valor do aumento: ${aumento}<br> Novo salario após o reajuste: ${salarioReajustado}`
} 

function Calculaporcentagem(aumento, salario){
    const porcentagem = aumento/salario
    return porcentagem
}