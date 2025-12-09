const numeros = [1, 2, 3, 4, 5];
const [n1, n2, n3, n4, n5] = numeros;
console.log(n4);

const [a1, ...a2] = numeros; //mostra do 2 ao 5
console.log(a2); 

console.clear()
const numeros2 = [...numeros, 6, 7, 8, 9, 10];
console.log(numeros2);
