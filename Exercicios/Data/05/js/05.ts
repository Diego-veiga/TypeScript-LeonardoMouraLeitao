const form = document.querySelector('.form')
const apurar = document.querySelector('.btn-apurar')

 enum Sexo{
     masculino=1,
     feminino=2
 }
 type Pessoa={
     nome:string,
     altura:number, 
     sexo:Sexo
 }

 const Pessoas:Pessoa[]=[]
 const PessoasMasculinas:Pessoa[]=[]
 const PessoasFemininas:Pessoa[]=[]
 
 form.addEventListener('submit', function(e){
    e.preventDefault()
    pegaValoresFormulario()

    console.log(Pessoas)
})

function adicionaPessoa(pessoa:Pessoa):void{
    Pessoas.push(pessoa)
}
 function pegaValoresFormulario():void{
    const nome:string =  form.querySelector('.nome').value
    const ComboSexo= form.querySelector('#sexo') as HTMLSelectElement
    const sexoIndex = ComboSexo.options[ComboSexo.selectedIndex].index
    const altura:number= Number(form.querySelector('.altura').value)
     if(!validaCampos(nome,altura)){
         alert('preencha todos os campos')
         return
     }
    let sexo:Sexo
    switch(sexoIndex){
     case 1:
         sexo = Sexo.masculino
         break;
     case 2:
         sexo = Sexo.feminino
         break;
     default:
         sexo = Sexo.masculino
    }
     CriaPessoa(nome, altura, sexo)
 }

function CriaPessoa(nome:string, altura:number, sexo:Sexo):Pessoa{
    const pessoa:Pessoa={
        nome,
        altura,
        sexo
    }
    
    adicionaPessoa(pessoa)
}

function CriaResultado(){
    const divResultado = document.createElement('div')
    return divResultado
  
}

apurar.addEventListener('click', function(){
   const div = CriaResultado()
   div.innerHTML=''
   const numeroMulheres = retornaMulheres(Pessoas)
   const numeroHomens = retornaHomen(Pessoas)

   div.innerHTML= `Numero de mulheres:${numeroMulheres}<br> Numero de homens:${numeroHomens}<br>`
   const body = document.querySelector('body')
   body.appendChild(div)
 
})

function validaCampos(...campos:any[]):boolean{
    for(let c of campos){
        if(!c){
            return false
        }else{
          return true
        }

    }
}

function retornaMulheres(p:Pessoa[]):number{
     const resultadoMulheres = p.filter(x=>x.sexo === Sexo.feminino)
     return resultadoMulheres.length
}

function retornaHomen(p:Pessoa[]):number{
     const resultadoHomen = p.filter(x=>x.sexo === Sexo.masculino)
     return resultadoHomen.length
}
