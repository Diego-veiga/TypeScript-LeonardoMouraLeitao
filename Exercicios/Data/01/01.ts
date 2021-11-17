const forms= document.querySelector('.form')
const resultados = document.querySelector('.resultado')
const media= document.querySelector('.media')


const notass:number[]=[]

function EventoForm(evento){
    evento.preventDefault()
    const inputNota = forms.querySelector('.nota')
    const nota =  Number(inputNota.value)
    AdicionarNotas(nota)
    inputNota.value =""
    

}


function AdicionarNotas(nota:number):void{
    notass.push(nota)
    console.log(notass)
}
function calculaMedia(){
   const soma= notass.reduce((total, n) => total+=n)
   const media =  soma/ notass.length
   colocaMediaNaTela(media)

}

function colocaMediaNaTela(mediaNota){
 resultados.innerHTML =`Sua media é : ${mediaNota}`
}

media.addEventListener('click', calculaMedia)

forms.addEventListener('submit', EventoForm)