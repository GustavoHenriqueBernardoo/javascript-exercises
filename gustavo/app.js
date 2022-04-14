const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findOldest = function (object) {
  // let arrAge = []
  return object.map(person => {
    const { name } = person
    const { yearOfBirth } = person
    const { yearOfDeath } = person
    // arrAge.push(name, yearOfDeath - yearOfBirth)
    let objAge = {}
    objAge['name'] = name
    objAge['age'] = yearOfDeath - yearOfBirth
    console.log(objAge.sort((a, b) => a - b))
    return objAge
  })

}

console.log(findOldest(people))
