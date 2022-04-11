const fibonacci = function (number) {
  // if (typeof number === 'string') {
  //   return 1
  // }

  if (number == 1) return 1

  if (number < 0) return 'OOPS'

  let result = 0,
    count = 1,
    n1 = 0,
    n2 = 1

  while (count < number) {
    result = n1 + n2
    n1 = n2
    n2 = result
    count++
  }

  return result
};

// Do not edit below this line
module.exports = fibonacci;
