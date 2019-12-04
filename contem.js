var array = [1, 2, 3, 4, 5];
var elemento = 0;
function contem(array, elemento){
    for(var i=0; i<array.length; i++)
      if(array[i] == elemento)
        return true;
    return false;
}