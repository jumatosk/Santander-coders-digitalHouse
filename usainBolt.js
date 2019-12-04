function caloriasDeTrote(voltas){
  var calorias=0;
  for(var i=1; i<=voltas; i++)
    calorias = (i * 5) + calorias;
  return calorias;
}