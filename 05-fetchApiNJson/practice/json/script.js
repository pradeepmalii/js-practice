// //JSON vs JS Object

// // JS Object — keys don't need quotes, can have methods
// let user = {
//     name: "Pradeep",
//     age: 22,
//     greet() {return "hello"}
// }

// // JSON — keys MUST be in double quotes, no methods, no trailing commas
// let jsonString = '{ "name": "Pradeep", "age": 22}'

// let data = JSON.parse(jsonString)


//Converting between JSON and JS
let client = {name: "Pradeep", age: 22}

// JS Object → JSON string (for sending to server)
let jsonString = JSON.stringify(client)
console.log(jsonString)
console.log(typeof jsonString)

// JSON string → JS Object (for using received data)
let parsed = JSON.parse(jsonString)
console.log(parsed)
console.log(typeof parsed)
console.log(parsed.name)
