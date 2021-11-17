function ConsumoCarro(KmPercorrigo:number, combustivelGasto:number):number{
     return  KmPercorrigo/ combustivelGasto
}

console.log(ConsumoCarro(500,35.00).toFixed(3))



class Car {
    constructor(public KmPercorrigo:number, public combustivelGasto:number ) {
         
    }

     ConsumoCarro():number{
        return  this.KmPercorrigo/ this.combustivelGasto
   }
}



const c = new Car(2254,124.4)
const resultadoooo=c.ConsumoCarro()

console.log(resultadoooo.toFixed(3))



function Distancia(x1:number, x2:number,y1:number, y2:number ):number{
 const distancia:number =  Math.sqrt(Math.pow((x2 - x1),2)  - Math.pow((y2 - y1),2))
 return distancia
}


console.log('Distancia',Distancia(1,7,5,9).toFixed(4))
