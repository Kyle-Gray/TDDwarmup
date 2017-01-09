'use strict';

//Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. Write tests instead of console.logs :slightly_smiling_face:.

plusOneSum([1, 2, 3, 4]); // 14
function plusOneSum(array){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== Number(array[i])){
      return console.log('error');
    }
    array[i] += 1;
  }
  return array.reduce((a, b) => a+b, 0);
}



module.exports= {
  plusOneSum: plusOneSum
};
