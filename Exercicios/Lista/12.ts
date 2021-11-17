const numeros:number[] =[]

function random(min=0, max=1000):number{
    return Math.floor(Math.random() * ( max -min) + min )
}

for(let i=0;i<=99;i++){
    numeros.push(random())

}
function ordenaVetor(vetor:number[]):number[]{
    return vetor.sort()
}

console.log(ordenaVetor(numeros))
