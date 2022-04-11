const add = function (...num) {
  return num.reduce((value1, value2) => value1 + value2)
}

const subtract = function (...num) {
  return num.reduce((value1, value2) => value1 - value2)
}

const sum = function (num) {
  return num.reduce((sumNum, num) => sumNum += num, 0)
}

const multiply = function (num) {
  return num.reduce((multi, num) => multi * num)
}

const power = function (...num) {
  return num.reduce((value1, value2) => Math.pow(value1, value2))
}

const factorial = function (num) {
  if (num === 0 || num === 1) return 1
  return (num * factorial(num - 1))
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
