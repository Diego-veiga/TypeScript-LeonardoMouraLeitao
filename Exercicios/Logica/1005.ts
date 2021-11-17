let n1:number=0
let n2:number=0

const calcMedia=(nota:number,peso:number):number=>{
    return (nota *peso)/10
}  

const calMediaFinal=( m1:number,m2:number):number=>{
    return ((m1+m2)*10) /11
}

const media1 = calcMedia(5, 3.5)
const media2 = calcMedia(7.1, 7.5)


console.log('Media1',media1)
console.log('Media2',media2)

console.log(calMediaFinal(media1,media2))


class Nota {
    private _nota1:number=0
    private _nota2:number=0
    private _peso1:number=0
    private _peso2:number=0
    private Media1:number=0
    private Media2:number=0
    private notaFinal:number=0
   
  
    set nota1(valor:number){
        if(valor<=10){
           this.nota1 =valor
        }
     }
    get nota1():number{
        return this._nota1
    }
    set nota2(valor:number){
        if(valor<=10){
           this.nota2 =valor
        }
     }
    get nota2():number{
        return this._nota2
    }

}




