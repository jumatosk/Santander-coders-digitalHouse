var cardiaco = true;
var alturaS = 1.5;
var alturaA = 1.2;
var companhia = true;

function alturaPermitida(altura, companhia){
  return altura >= alturaS && !companhia || altura >= alturaA && companhia;
}

function podeSubir(alturaPessoa, vemComCompanhia, temProblemaCardiaco){
  return alturaPermitida(alturaPessoa, vemComCompanhia) && !temProblemaCardiaco;
}