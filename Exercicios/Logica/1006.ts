 const verifcaNota=(nota:number):boolean=>{
    if(nota>10){
        return false
    }else{
        return true
    }
 }
 const calculaMedia=(n1:number, n2:number, n3:number):number | string=>{
    if(verifcaNota(n1) && verifcaNota(n2)&& verifcaNota(n3)){
         const resultado= (n1 * 0.2) +(n2 * 0.3) +(n3 *0.5)
         return resultado.toFixed(1)
    }else{
        return 'as notas digitadas foram superiores a 10'
    }
 }


 console.log(calculaMedia(5,6,7))
 console.log(calculaMedia(5,10,10))
 console.log(calculaMedia(10,10,5))


 /**** Com classe *****/

 class Media{
     private mediaFinal:number=0
     private nota1:number=0
     private nota2:number=0
     private nota3:number=0
     

     set n1(nota1:number){
         if(this.verifcaNota(nota1))
          this.nota1=nota1
     }
     get n1():number{
         return this.nota1
     }
     set n2(nota2:number){
        if(this.verifcaNota(nota2))
         this.nota2=nota2
    }
    get n2():number{
        return this.nota2
    }
    set n3(nota3:number){
        if(this.verifcaNota(nota3))
         this.nota3=nota3
    }
    get n3():number{
        return this.nota3
    }

   verifcaNota=(nota:number):boolean=>{
    if(nota>10){
        return false
    }else{
        return true
    }
  }
  
  caculaNotafinal():number{
    return this.mediaFinal= (this.nota1 * 0.2) +(this.nota2 * 0.3) +(this.nota3 *0.5)
  }
 }

 const teste1 = new Media()

 teste1.n1=5
 teste1.n2=10
 teste1.n3=10


 console.log('com classe',teste1.caculaNotafinal())


