//Spread -expanding
//array
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let combined = [...arr1, ...arr2]
//object
let defaults = {theme: "lights", lang: "en"}
let userPrefers = {lang: "hi", fontSize: 16}
let settings = {...defaults, ...userPrefers}


console.log(combined)
console.log(settings)
//theme: 'lights', lang: 'hi', fontSize: 16} "Last value wins" in object spread


//Rest — collecting remaining items
//array
let [first, second, ...rest] = [1,2,3,4,5]
console.log(first)
console.log(second)
console.log(rest)

//function
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(1,2))
console.log(sum(1,2,3,4,5))