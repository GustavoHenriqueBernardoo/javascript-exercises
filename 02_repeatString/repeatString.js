const repeatString = function(string, num) {
  let string2 = string;
  let i = 1 ;
  if (num === - 1){
    string2 = 'ERROR';
    return string2;
  }
  else if (num === 0){
    string2 = ''
    return string2;
  }else{
    while (i < num) {
      // string;
      string2 += string;
      console.log(i, string2);
      i++;
    }
  }
  return string2;
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
