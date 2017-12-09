function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

// a + b + c = d
// rand for d

// c = d - a - b

let setArray = []
let set = {}

for(let i = 0; i < 100; i++) {
  let d = getRandomInt(0, 21);
  set.d = d
  let a = getRandomInt(0, d)
  set.a = a
  let b = getRandomInt(0, d - a)
  set.b = b
  let c = d - a - b
  set.c = c
  setArray.push(set)
  set = {}
}
console.log(setArray)


