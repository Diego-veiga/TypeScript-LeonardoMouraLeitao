
const numeros1:number[]=[]
const numeros2:number[]=[]

function random(min=0,max=1000){
  return Math.floor(Math.random() * (max -min) + min)
}

function GeraListaAleatoria(vetor:number[]):number[]{
    for(let i=0;i<10;i++){
      vetor.push(random())
    }
    return vetor
}

function OrdernaLista(lista:number[]):number[]{
    return lista.sort()
}


function juntaLista(lista1:number[],lista2:number[]):number[]{
    let newLista:number[]
    newLista = lista1.concat(lista1).sort()
    return newLista.sort()
}

function Final (lista1:number[],lista2:number[]):number[]{
    GeraListaAleatoria(lista1)
    GeraListaAleatoria(lista2)
    
    OrdernaLista(lista1)
    OrdernaLista(lista2)

    const vetorFinal:number[] =  juntaLista(numeros1, numeros2)
    return vetorFinal
}



console.log(Final(numeros1, numeros2))



