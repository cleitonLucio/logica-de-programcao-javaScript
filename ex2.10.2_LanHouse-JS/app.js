// Math.ceil(num)
function calcularValorPTempo(){
    var inPreco = document.getElementById("inPreco");
    var inTempo = document.getElementById("inTempo");
    var outResposta = document.getElementById("outResposta");

    var valorAPagar = Number(inPreco.value);
    var tempoCliente = Math.ceil(inTempo.value/15); 
    var resultoAPagar = Number(valorAPagar*tempoCliente);

    outResposta.textContent = "Valor a Pagar R$: " + resultoAPagar
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValorPTempo);