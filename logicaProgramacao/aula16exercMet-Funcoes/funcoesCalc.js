let num1 = 10;
let num2 = 10;
let operador = '*';


function subtrair(n1 = 0, n2 = 0){
    return n1 - n2;
}
function multiplicar(n1 = 0, n2 = 0){
    return n1 * n2;
}
function dividir(n1 = 0, n2 = 0){
    return n1 / n2;
}
function somar(n1 = 0, n2 = 0){
    return n1 + n2;
}
function calcularModulo(n1 = 0, n2 = 0){
    return n1 % n2;
}

function calcular(n1 = 0, n2 = 0, op = '+') {
    
    switch (op) {
        case '+':
            return somar(n1, n2);
            break;
        case '-':
            return subtrair(n1, n2);
            break;
        case '/':
            return dividir(n1, n2);
            break;
        case '*':
            return multiplicar(n1, n2);
            break;
        case '%':
            return calcularModulo(n1, n2);
            break;
    

}
}
console.log(calcular(num1, num2, operador));