const multiplicacao = require('./multiplicacao');
test("deve multiplicacaodois numeros",()=>{
    const resultado = multiplicacao(2,3);
    expect(resultado).toBe(6);
})

test('deve multiplicar um número positivo por um negativo', () => {
    const resultado = multiplicacao(4, -2);
    expect(resultado).toBe(-8);
  });

  test('deve multiplicar dois números negativos', () => {
    const resultado = multiplicacao(-3, -4);
    expect(resultado).toBe(12);
  });
  test('deve retornar zero quando um dos fatores for zero', () => {
    const resultado = multiplicacao(5, 0);
    expect(resultado).toBe(0);
  });