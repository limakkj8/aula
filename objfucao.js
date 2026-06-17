const calculadora = { numero1 : 20, numero2 : 5, multiplicar () { return this.numero1 * this.numero2 }, dividir () { return this.numero1 / this.numero2 }, subtrair () { return this.numero1 - this.numero2 }, somar () { return this.numero1 + this.numero2 } } 
console.log(calculadora.multiplicar()); 
console.log(calculadora.dividir());
 console.log(calculadora.subtrair()); 
 console.log(calculadora.somar());