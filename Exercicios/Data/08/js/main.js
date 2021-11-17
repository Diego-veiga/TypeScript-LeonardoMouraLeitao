

const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const dataInput = document.querySelector('.data').value.replace(/-/g,'/')

    const dataSeparada= dataInput.split('/')
   
    if(dataSeparada.length<2){
        alert('Por favor digite uma data valida')
        return
    }
    
    retornaMes(dataSeparada[1])

    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = `${dataSeparada[2]} de ${retornaMes(dataSeparada[1])} de ${dataSeparada[0]}`
    
   
})


function retornaMes(mes){
    
    let mesExtenso
    switch (mes){
        case '01':
            mesExtenso ='Janeiro'
            break;
        case '02':
            mesExtenso ='Fevereiro'
            break;
        case '03':
            mesExtenso ='Março'
            break;
        case '04':
            mesExtenso ='Abril'
            break;
        case '05':
            mesExtenso ='Maio'
            break;
        case '06':
            mesExtenso ='Junho'
            break;
        case '07':
            mesExtenso ='Julho'
            break;
        case '08':
            mesExtenso ='Agosto'
            break;
        case '09':
            mesExtenso ='Setembro'
            break;
        case '10':
            mesExtenso ='Outubro'
            break;
        case '11':
            mesExtenso ='Novembro'
            break;
        case '12':
            mesExtenso ='Dezembro'
            break;
            
    }
    return mesExtenso
}