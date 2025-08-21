//const validarUsuario = () => console.log('Ola, mundo!')
//validarUsuario();
let num1 = 10;
let num2 = 10;
let operador = '+';


const subtrair = (n1 = 0, n2 = 0) => n1 - n2;
const multiplicar = (n1 = 0, n2 = 0) => n1 * n2;
const dividir = (n1 = 0, n2 = 0) => n1 / n2;
const somar = (n1 = 0, n2 = 0) => n1 + n2;
const calcularModulo = (n1 = 0, n2 = 0) => n1 % n2;
const calcular = (n1 = 0, n2 = 0, op = '+') => {
    
    switch (op) {
        case '+':
            return somar(n1, n2);            
        case '-':
            return subtrair(n1, n2);            
        case '/':
            return dividir(n1, n2);            
        case '*':
            return multiplicar(n1, n2);
        case '%':
            return calcularModulo(n1, n2);
    }
}
console.log(calcular(num1, num2, operador));