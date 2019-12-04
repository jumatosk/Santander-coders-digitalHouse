function somaDosPares(x){
  var soma=0;
  for(var i=0; i<=x; i++)
    if(i%2==0)
      soma+=i;
  return soma;
}