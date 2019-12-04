var segunda = "segunda";
var terca = "terça";
var quarta = "quarta";
var quinta = "quinta";
var sexta = "sexta-feira";
var horaMinima = 10;
var horaMaxima = 18;

function possoIrAoBanco(diaDaSemana, horaAtual){
  return (diaDaSemana == segunda || diaDaSemana == terca || diaDaSemana == quarta || diaDaSemana == quinta || diaDaSemana == sexta) && horaAtual >= horaMinima && horaAtual < horaMaxima;
}