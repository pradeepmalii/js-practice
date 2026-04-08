// && short circuit, if left is falsy right never runs
let user = null
user && console.log(user.name)  

let isLoggedIn = true
isLoggedIn && console.log("Welcome!!")


// || short circuit, if left is truthy, right never runs
let namee = "Pradeep"
let dislayName = namee || "Guest"
console.log(dislayName)

let username = ""
let display = username || "Guest"
console.log(display)