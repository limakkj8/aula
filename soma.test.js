const soma = require('./soma');
test("deve somar dois numeros",()=>{
    const resultado = soma(2,3);
    expect(resultado).toBe(5);
})


