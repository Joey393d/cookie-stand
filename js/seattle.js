'let strict'


let minPeople = 23
let maxPeople = 65
let avgCookie = 6.3


function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randInt = randomIntFromInterval(23, 65)

console.log(randInt)

for(i=0; i<15; i++) {
  randInt
}
