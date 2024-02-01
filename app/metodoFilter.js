const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))

function filtrarLivros (){
    const elementoBtn = document.getElementById(this.id);//pega o id do botão que foi clicado para chamar a função
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria == 'disponivel'? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);// primeiro verifica se a categoria é disponivel, caso contrario realzia o resto do código (ternário)
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);//chamando a função para calcular o valor total, a variavel valorTotal sera usado como template string dentro da função exibirValorTotalDosLivros
        exibirValorTotalDosLivros(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivros(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = 
    `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    
    `
}