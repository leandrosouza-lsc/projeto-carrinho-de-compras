let valorTotal = 0;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let totalProduto = quantidade * precoProduto;
    let listaProdutos = document.getElementById('lista-produtos');
    let campoTotal = document.getElementById('valor-total');

    if(quantidade <= 0){
        alert('Quantidade inserida inválida.');
        return
    }
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${totalProduto}</span>
    </section>`;
    
    valorTotal = valorTotal + totalProduto;
    campoTotal.innerHTML = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = '';
}
function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('quantidade').value = '';
}