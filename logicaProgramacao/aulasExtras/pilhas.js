// 
class Pilha {
    constructor() {
        this.itens = []
    }
    push(elemento) {
        this.itens.push(elemento)
    }
    pop() {
        return this.itens.pop()
    }
    peek() {
        return this.itens[this.itens.length - 1]
    }
    isEmpty() {
        return this.itens.length === 0        
    }
    tamanho() {
        return this.itens.length
    }
}

const pilha = new Pilha()

pilha.push('A')
pilha.push('B')
pilha.push('C')

console.log(pilha.peek())
console.log(pilha.pop())
console.log(pilha.peek())
console.log(pilha.tamanho())