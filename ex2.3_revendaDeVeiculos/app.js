function verPromocao(){
    // referencia dos elementos no html
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outPreco = document.getElementById("outPreco");
    var outPrecoX12 = document.getElementById("outPrecoX12");
    
    // conteúdos digitados pelo usuário nos input
    var nVeiculo = inVeiculo.value;
    var vPreco = Number(inPreco.value);
    var vPrecoM = Number(vPreco/2);

    // apresenta a resposta ao usuário
    outVeiculo.textContent = "Promoção: "+ nVeiculo;
    outPreco.textContent = "Entrada de R$: "+ vPrecoM;
    outPrecoX12.textContent = "+ 12x de R$:"+ (vPrecoM/12);
}

var btVerpromocao = document.getElementById("btVerpromocao");
btVerpromocao.addEventListener("click", verPromocao);
