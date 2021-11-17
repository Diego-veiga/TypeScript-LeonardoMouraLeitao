function pares(x, y) {
    var pares = [];
    for (var i = x; i <= y; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}
console.log(pares(32, 321));
