class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
    }
    mostrarConteudo() {
        return `Título: ${this.titulo} - Autor: ${this.autor} - Genero: ${this.genero}`
    }
}
export default Livro