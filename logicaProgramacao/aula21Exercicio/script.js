import Livro from "./models/Livro.js";
const listaLivros = []
function adicionarLivro() {
    const titulo = prompt('Digite o título do livro:')
    const autor = prompt('Digite o autor do livro:')
    const genero = prompt('Digite o genero do livro:')
    
    function salvarLivros() {
  localStorage.setItem('livros', JSON.stringify(listaLivros));
  
}
    if (titulo && isNaN(autor) && isNaN(genero)) {
        const livro = new Livro(titulo, autor, genero)
        listaLivros.push(livro)
        salvarLivros()
        alert('Livro adicionado com sucesso')
    } else {
        alert('Por favor, preencha todos os campos corretamente')
    }
}
function mostrarLivros() {
    if (listaLivros.length === 0) {
        alert('Nenhum livro cadastro')
        return
    }

let mensagem = 'Lista de Livros:\n'
listaLivros.forEach((livro, index) => {
    mensagem += `${index + 1}. ${livro.mostrarConteudo()}\n`
})
alert(mensagem)
}
function deletarLivro() {
  const index =
    parseInt(prompt('Digite o número do livro para deletar:')) - 1
  if (index >= 0 && index < listaLivros.length) {
    const livroRemovido = listaLivros.splice(index, 1)[0]
    salvarLivros()
    alert(`Livro '${livroRemovido.titulo}' deletado com sucesso!`)
  } else {
    alert('Livro ñ encontrado')
  }
}
function menu() {
  while (true) {
    const opcao = Number(
      prompt(
        "Escolha uma opção:\n1. Adicionar livro\n2. Listar livros\n3. Deletar livro\n4. Sair"
      )
    )
    if (opcao === isNaN) {
      alert('Operação Cancelada.')
      break
    }
    switch (opcao) {
      case 1:
        adicionarLivro()
        break
      case 2:
        mostrarLivros()
        break
      case 3:
        deletarLivro()
        break
      case 4:
        alert("Saindo...")
        return //break;
      default:
        alert("Opção inválida!!")
    }
  }
}
function carregarLivros() {
  const livrosSalvos = localStorage.getItem('livros');
  if (livrosSalvos) {
    const livrosArray = JSON.parse(livrosSalvos);
    livrosArray.forEach(livroData => {
      const livro = new Livro(livroData.titulo, livroData.autor, livroData.genero);
      listaLivros.push(livro);
    });
  }
}

carregarLivros();
menu()