const numeros = [1, 2, 3, 4, 5];
const [n1, n2, n3, n4, n5] = numeros;
console.log(n4);

const [a1, ...a2] = numeros; //mostra do 2 ao 5
console.log(a2); 

console.clear()
const numeros2 = [...numeros, 6, 7, 8, 9, 10];
console.log(numeros2);

// const numeros = [1, 2, 3, 4, 5];
const pessoas = [
  { nome: 'Ana Silva', idade: 28, email: 'ana.silva@example.com', cidade: 'São Paulo' },
  { nome: 'Bruno Costa', idade: 35, email: 'bruno.costa@example.com', cidade: 'Rio de Janeiro' },
  { nome: 'Carla Souza', idade: 22, email: 'carla.souza@example.com', cidade: 'Belo Horizonte' },
  { nome: 'Daniel Pereira', idade: 41, email: 'daniel.pereira@example.com', cidade: 'Curitiba' },
  { nome: 'Eva Lima', idade: 30, email: 'eva.lima@example.com', cidade: 'Porto Alegre' },
];

// const [n1, n2, n3, n4, n5] = numeros;
const [
  { nome: nome1, idade: idade1, email: email1, cidade: cidade1 },
  { nome: nome2, idade: idade2, email: email2, cidade: cidade2 },
  { nome: nome3, idade: idade3, email: email3, cidade: cidade3 },
  { nome: nome4, idade: idade4, email: email4, cidade: cidade4 },
  { nome: nome5, idade: idade5, email: email5, cidade: cidade5 },
] = pessoas;

// const [a1, ...a2] = numeros;
// const numeros2 = [...numeros, 6, 7, 8, 9, 10];

console.log(n2)
console.log(a1)
console.log(nome1)
console.log(numeros2)


