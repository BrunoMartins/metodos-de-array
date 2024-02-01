function aplicarDesconto(livros){
    const desconto = 0.3;

    livrosComDesconto = livros.map(livro =>{
        return {...livro,preco: livro.preco - (livro.preco * desconto)}//copia tudo que tem de livro dentro do array, porém modifica somente o preço
    })
    return livrosComDesconto;//Map precisa de return
}