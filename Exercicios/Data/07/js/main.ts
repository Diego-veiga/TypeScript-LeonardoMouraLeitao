const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    try {
        const dataInput =  document.querySelector('.data').value

        if(!dataInput){
            throw new Error('Por favor digite uma data valida')
        }
        const data = new Date(dataInput)
        separaData(data)
        
    } catch (error) {
        alert(error)
        
    }
   
    
})

function separaData(data:Date):void{
    const dataSeparada:number[]=[]
     const ano:number = data.getFullYear()
     dataSeparada.push(ano)
     const mes:number = data.getMonth() +1
     dataSeparada.push(mes)
     const dia:number = data.getDate()
     dataSeparada.push(dia)
     mostraResultado(dataSeparada)
     
     
}

function mostraResultado(DataSeparada:number[]):void{
    
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML=''
     resultado.innerHTML += ` Ano: ${DataSeparada[0]}<br> Mes:${DataSeparada[1]}<br> Dia:${DataSeparada[2]}`
    
}