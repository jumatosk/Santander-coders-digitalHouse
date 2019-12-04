var temJuros = true;
var taxasComCartao = 6;
var dinheiroDisponivel = 320;

function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}
