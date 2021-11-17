 const calc = (numero:number):Promise<number> =>{
     
  return new Promise((resolve, reject)=>{
      if(numero%2===0){
          resolve(numero)
      }
      else{
          reject(numero)
      }

  })
 }

 calc(2)
       .then((numero)=> console.log(`${numero} é par`))
       .catch((numero)=> console.log(`${numero} não é par`))
