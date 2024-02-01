function calcularValorTotalLivrosDisponiveis(livros){
    return livros.reduce((acc, livro)=> acc + livro.preco,0).toFixed(2);// somar os valores a partir do indice 0 

}