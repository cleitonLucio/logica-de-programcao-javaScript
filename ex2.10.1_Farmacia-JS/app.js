function calcularPromocao() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");

    var nomeDoProduto = inMedicamento.value;
    var precoDoProduto = Number(inPreco.value);
    var precoNaPromoção = Number(Math.floor(precoDoProduto*2));

    outMedicamento.textContent = "Promoção de "+ nomeDoProduto;
    outPromocao.textContent = "Leve 2 por apenas R$ "+ precoNaPromoção;
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromocao);