/*jshint esversion: 6*/
function sumSeries(numArray, num) {
  let sum = 0;

  for(let i = 0; i < numArray.length; i++){
    sum = 0;
    for(let y = i; y < numArray.length; y++){
      if(numArray[y] === num){
        return true;
      } else {
        sum += numArray[y];
        if (sum === num){
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = sumSeries;