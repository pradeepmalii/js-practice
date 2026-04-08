//Object destructing
let user = {
    namee: "Pradeep",
    age: 23,
    address: {
        city: "Mumbai",
        pin: "400069"
    }
}

let {namee, address, address: {city, pin}} = user
console.log(namee)
console.log(address)
console.log(city)
console.log(pin)


//Destructing in function parameters
// function displayUser(user){
//     console.log(user.namee, user.age)
// }

function displayUser({namee, age}){
    console.log(namee, age)
}
displayUser({namee: "Pradeep", age: 23})


//Destructing with rename and default
let {namee: fullName = "Anonymous", age = 18} = {namee: "Pradeep"}
console.log(fullName)
console.log(age)
