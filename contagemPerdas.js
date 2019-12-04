function quantidadeDeMesesComPerda(umPeriodo){
  let qtd=0;
  
  for(let mes=0; mes<umPeriodo.length; mes++){
    if(umPeriodo[mes]<0)
      qtd++;
  }
  return qtd;
}