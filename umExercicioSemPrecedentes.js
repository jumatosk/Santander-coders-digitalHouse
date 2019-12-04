var sexoF = "F";
var sexoM = "M";
var idadeF = 60;
var idadeM = 65;
var aContribuicao = 30;

function cumpreIdadeMinima(idade, sexo){
    return sexo == sexoF && idade >=60 || sexo == sexoM && idade >=65;
}

function temContribuicaoSuficiente(anosContribuicao){
  return anosContribuicao >= aContribuicao;
}
function podeSeAposentar(idade, sexo, contribuicao){
    return cumpreIdadeMinima(idade, sexo) && temContribuicaoSuficiente(contribuicao);
}