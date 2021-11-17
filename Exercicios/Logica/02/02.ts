function pares(x:number, y:number): number[] {
    const pares:number[]=[]
    for (let i = x; i <= y; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        }
    }
    return pares
}

console.log(pares(32,321))