function atravessarRua(x:number, y:number, d:number):number{
  let numeroPassos:number=0
    while(x<=y){
        
        x+=d
        numeroPassos+=1
    }
    return numeroPassos
}


const resultado = atravessarRua(5,40,1)
console.log(resultado)



function atravessaRuaMelghorado(X:number, Y:number, Z:number):number{
    let valor:number = ((Y - X) / Z);
    if (Number.isInteger(valor)){
        return valor;
    } else {
       let valorCorreto:number = Math.floor(valor + 1);
        return valorCorreto;
    }
}

const resultados = atravessaRuaMelghorado(5,40,1)
console.log(resultados)