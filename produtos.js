const produto = {
    nome: "iphone 13 pro",
    marca: "apple",
    preco: 3500.00,
  };
  for ( let chave in produto ) {
    console.log(chave, produto[chave]);
  }

console.log(Object.keys(produto));
console.log(Object.values(produto));