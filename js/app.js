let totalGeral = 0;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor 
    let produtoSelecionado = document.getElementById(`produto`).value;
    let produto = produtoSelecionado.split("-")[0];
    let valorProduto = produtoSelecionado.split("R$")[1];
    let qntdSelecionado = document.getElementById(`quantidade`).value;
    //calcular o preço, o nosso subtotal 
    let calculo = qntdSelecionado * valorProduto;
    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qntdSelecionado}x</span> ${produto} <span class="texto-azul">R$${calculo} </span>
  </section>`;
    //atualizar o valor total
    totalGeral = totalGeral + calculo;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById(`quantidade`).value = "";
}

function limpar(){
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = [];
    document.getElementById("valor-total").innerHTML = 0;
    document.getElementById(`quantidade`).value = "";
}   

