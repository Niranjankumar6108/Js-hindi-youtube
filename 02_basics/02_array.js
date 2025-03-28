const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);// ['thor','Ironman,'spiderman',['superman,'flash','batman']]

const allheros = marvel_heros.concat(dc_heros)

console.log(allheros);// ['thor','Ironman,'spiderman','superman,'flash','batman']

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.filter(Infinity)
console.log(real_another_array); // out = [1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // out = ['H','i','t','e','s','h']

console.log(Array.from({name: "hitesh"})) //out = [] intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //out = [100,200,300]