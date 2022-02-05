let stringSplit;
      

const reverseString = function(string) {
  if (string === ''){
    return '';
  }else{
    stringSplit = string.split('')
    let myArray = [];
    
    for (let i = stringSplit.length - 1; i > -1; i--){
      
      // myArray.push(string[i])
      myArray += string[i];
      // console.log(myArray) 
    }
    return myArray
  }
};
// Do not edit below this line
module.exports = reverseString;
