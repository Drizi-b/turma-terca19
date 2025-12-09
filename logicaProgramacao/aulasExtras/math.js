let raio = 10
const area = Math.PI * Math.pow(raio, 2)

let a = Math.floor((Math.random() * 10))
console.log(a)
console.clear()

const min = 10
const max = 20
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(`Numero aleatorio entre ${min} e ${max}: ${aleatorio(min, max)}`)