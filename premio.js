function primeiroLugar(){return "ouro";}
function segundoLugar(){return "prata";}
function terceiroLugar(){return "bronze";}
function quartoLugar(){return "Continue participando";}
function quintoLugar(){return "Continue participando";}
function medalhaSegundoOPosto(posto){
  if(posto == 1)
    return primeiroLugar();
  else if(posto == 2)
    return segundoLugar();
  else if(posto == 3)
    return terceiroLugar();
  else if(posto == 4)
    return quartoLugar();
  else
    return "Continue participando";
}