let precoTotal;
limpar();

function adicionar(){
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let precoUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    
    if(quantidade <=0){
        alert(`A quantidade adicionada no carrinho deve ser maior que zero`);
        return;
    }

    let preco = parseInt(quantidade * precoUnitario);
    
    let produtoParaCarrinho = document.getElementById("lista-produtos");
    produtoParaCarrinho.innerHTML = produtoParaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    
    precoTotal = precoTotal + preco;

    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = `R$${precoTotal}`;

    document.getElementById("quantidade").value = 0;
}

function limpar(){
    document.getElementById("lista-produtos").innerHTML = ""; 
    document.getElementById("valor-total").textContent = "R$ 0";
    document.getElementById("quantidade").value = 0;
    precoTotal = 0;
}


//DESAFIO: 
// Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.
// Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

// Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

// Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.