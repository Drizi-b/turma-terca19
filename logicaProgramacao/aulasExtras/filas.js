class Fila {
    constructor() {
        this.itens = []
    }
    enqueue(elemento) { // inclui
        this.itens.push(elemento)
    }
    dequeue() { // exclui
        return this.itens.shift()
    }
    front() {
        return this.itens[0]
    }
    isEmpty() { // verifica se vazio
        return this.itens.length === 0        
    }
    tamanho() { // exibe o tamanho
        return this.itens.length
    }
}

const fila = new Fila()

fila.enqueue('Cliente 1')
fila.enqueue('Cliente 2')
fila.enqueue('Cliente 3')

console.log(fila.front())
console.log(fila.dequeue())
console.log(fila.front())
console.log(fila.tamanho())
console.log(fila.isEmpty())