const removeFromArray = function(array, remove){
  const myArray = [];
  let i = 0;
  let index = array.indexOf(remove);
  while (i < array.length){
    if(array[i] === remove){
      // console.log(i);
      // console.log('I find you')
      (array.splice(i, 1))
      // break;
    }else{
      i++;
      // console.log(i);
    }
  }
  // myArray.push(array);

  return array
}

// Do not edit below this line
module.exports = removeFromArray;
