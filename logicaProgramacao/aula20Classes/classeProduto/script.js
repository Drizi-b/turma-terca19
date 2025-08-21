import Produto from "./models/Produto.js";
const listaProdutos = [];
function adicionarProduto() {
  const nome = prompt("Digite o nome do produto:");
  const preco = parseFloat(prompt("Digite o preço do produto:"));
  const quantidade = parseInt(prompt("Digite a quantidade do produto:"));

  if (nome && !isNaN(preco) && !isNaN(quantidade)) {
    const produto = new Produto(nome, preco, quantidade);
    listaProdutos.push(produto);
    alert("Produto adicionado com sucesso");
  } else {
    alert("Por favor, preencha todos os campos corretamente");
  }
}
function listarProdutos() {
  //document.open()
  if (listaProdutos.length === 0) {
    alert("Nenhum produto cadastrado"); // document.write
    //document.close()
    return;
  }
  let mensagem = "Lista de Produtos:\n"; //document.write
  listaProdutos.forEach((produto, index) => {
    mensagem += `${index + 1}. ${produto.exibirInfo()}\n`;
    //console.log(`${index + 1}. ${produto.exibirInfo()}`)
  });
  alert(mensagem);
  //document.close()
}

function editarQuantidade() {
  const index = parseInt(
    prompt("Digite o numero do produto para editar a quantidade:")
  );
  if (index >= 0 && index < listaProdutos.length) {
    const novaQuantidade = parseInt(prompt("Digite a nova quantidade:"));
    if (!isNaN(novaQuantidade)) {
      listaProdutos[index].atualizarQuantidade(novaQuantidade);
      alert("Quantidade atualizada com sucesso!");
    } else {
      alert("Quantidade inválida!");
    }
  } else {
    alert("Produto ñ encontrado!");
  }
}
function deletarProduto() {
  const index =
    parseInt(prompt("Digite o número do produto para deletar:")) - 1;
  if (index >= 0 && index < listaProdutos.length) {
    const produtoRemovido = listaProdutos.splice(index, 1)[0];
    alert(`Produto "${produtoRemovido.nome}" deletado com sucesso!`);
  } else {
    alert("Produto ñ encontrado");
  }
}
function menu() {
  while (true) {
    const opcao = Number(
      prompt(
        "Escolha uma opção:\n1. Adicionar produto\n2. Listar produtos\n3. Editar quantidade\n4. Deletar produto\n5. Sair"
      )
    );
    if (opcao === null) {
      alert('Operação Cancelada.')
      break
    }
    switch (opcao) {
      case 1:
        adicionarProduto();
        break;
      case 2:
        listarProdutos();
        break;
      case 3:
        editarQuantidade();
        break;
      case 4:
        deletarProduto();
        break;
      case 5:
        alert("Saindo...");
        return //break;
      default:
        alert("Opção inválida!!");
    }
  }
}
menu();
