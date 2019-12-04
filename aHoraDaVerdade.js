var filho1 = "sandy";
var filh2 = "junior";

function paiDe(filho1){
  return "Fábio Júnior";
} 
function maeDe(filho2){
  return "Glória Pires"
}
function temAMesmaMae(filho1, filho2){
  return(maeDe(filho1) == maeDe(filho2));
}

function temOMesmoPai(filho1, filho2){
 return paiDe(filho1) == paiDe(filho2);
}

function saoMeioIrmaos(filho1, filho2){
  if(temAMesmaMae(filho1, filho2) && !temOMesmoPai(filho1, filho2) || !temAMesmaMae(filho1, filho2) && temOMesmoPai(filho1, filho2))
      return true;
  else if(temAMesmaMae(filho1, filho2) && temOMesmoPai(filho1, filho2) || (!temAMesmaMae(filho1, filho2) && !temOMesmoPai(filho1, filho2)))
    return false;
}