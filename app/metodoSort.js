let bntOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

bntOrdenarPorPreco.addEventListener('click',ordernarLivrosPorPreco);

function ordernarLivrosPorPreco(){
    livrosOrednados = livros.sort((a,b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrednados);
}