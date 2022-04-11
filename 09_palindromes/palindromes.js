const palindromes = function (str) {
  const regex = /[!_*# .,\/:\-\()]/gm
  const reverseCopy = str.replace(regex, '').split('').reverse().join('').toLowerCase()
  const strCopy = str.replace(regex, '').split('').join('').toLowerCase()

  if (strCopy === reverseCopy) {
    return true
  } else {
    return false
  }
}

// Do not edit below this line
module.exports = palindromes;
