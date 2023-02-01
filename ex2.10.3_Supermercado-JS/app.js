function calcularPromo50off(){

var inProduto = document.getElementById("inProduto");
var inPreco = document.getElementById("inPreco");
var outRespostaDoProduto = document.getElementById("outRespostaDoProduto");
var outPromo= document.getElementById("outPromo");

var nomeProduto = inProduto.value;
var precoDoProdutoOriginal = Number(inPreco.value);

//Para exibir o resultado///
var precoDaPromocao = Number(precoDoProdutoOriginal*0.5);
var precoDos2produtos = Number((precoDoProdutoOriginal*2)+precoDaPromocao);

outRespostaDoProduto.textContent = nomeProduto + " - Promoção: Leve 3 por R$: " + precoDos2produtos;

outPromo.textContent = "O 3º produto custa apenas R$: " + precoDaPromocao;

}

var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", calcularPromo50off);

