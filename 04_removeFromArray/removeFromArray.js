const removeFromArray = function(array, ...remove){
  // console.log(remove[0])
  // console.log(remove[1])
  // console.log(remove[2])
  // console.log(remove[3])

  const myArray = [];
  let i = 0;
  // let index = array.indexOf(remove[0]);
  // console.log('index',index)
  while (i < array.length){
    if(array[i] === remove[0]|| array[i] === remove[1]||array[i] === remove[2]||array[i] === remove[3]){
      (array.splice(i, 1))
    }else{
      i++;
    }
  }
  myArray.push(array);

  return array
}


// Do not edit below this line
module.exports = removeFromArray;
