const findTheOldest = function (object) {
  // let age = 0
  // return people.reduce((birth, death) => {
  //   people.filter(person => {
  //     birth = person.yearOfBirth
  //     death = person.yearOfDeath
  //   })
  //   birth - death
  // })
  // let birth = 0
  // let born = 0
  // console.log(birth)
  // .reduce((total, { yearOfBirth }, { yearOfDeath }) => total = yearOfBirth - yearOfDeath, 0)

  let objAge = {}
  let arrAge = []
  let older
  let result
  object.map(person => {
    const { name } = person
    const { yearOfBirth } = person
    const { yearOfDeath } = person
    arrAge.push(yearOfDeath - yearOfBirth)
    objAge[name] = yearOfDeath - yearOfBirth

    older = Math.max(...arrAge)
  })
  for (const key in objAge) {
    if (objAge[key] === older) {
      result = objAge[key]
    }
  }
  return obj
};

// Do not edit below this line
module.exports = findTheOldest;
