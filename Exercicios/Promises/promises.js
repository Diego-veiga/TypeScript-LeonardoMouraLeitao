 const calcula = (numero1)=>{
     return new Promise((resolve, reject)=>{
         if(typeof numero1 ==='number'){
             resolve(numero1)
         }else{
             reject(' o valor digitado não é do ipo numero')
         }
     })
 }

 calcula(1) 
           .then((numero1)=> console.log(`O numero ${numero1} é do tipo numero`))
           .catch((erro)=> console.log(erro))

console.log('testando ')