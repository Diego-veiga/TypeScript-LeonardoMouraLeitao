function A(a:number, b: number):string {
  const area = (a*b) /2
  return area.toFixed(3)
}
console.log(`TRIANGULO: ${A(3.0,5.2)}`)