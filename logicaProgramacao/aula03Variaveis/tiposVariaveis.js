let nome = "Adriana"; //string
let idade = 49; //nunmber
let possuiFaculdade = true; //boolean
let indefinido = undefined; //indefinido
let indefinido2; //indefinido
let stringVazia = ""; //string vazia
let nulo = null;
let carrinhoDeCompras = ["arroz", "café", "ovos"]; //array / Tipo object
let pessoa = {
  nome: "Adriana",
  idade: "49",
  possuiFaculdade: false,
};

function criarTexto(nome) {
  return "Seu nome é" + nome;
}

console.log(typeof (nome));
console.log(typeof (idade));
console.log(typeof (possuiFaculdade));
console.log(typeof (carrinhoDeCompras))
console.log(typeof (pessoa))
console.log(typeof (criarTexto))
console.log(typeof (indefinido))
console.log(typeof (indefinido2))
console.log(typeof (stringVazia))
console.log(typeof (nulo))