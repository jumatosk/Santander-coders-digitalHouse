var umArray = [1,2,3];
var outroArray = [4,5];

function mover(umArray, outroArray){
    outroArray.push(umArray.pop()); 
  }

console.log(mover(umArray, outroArray));