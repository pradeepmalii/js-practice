let name = "Pradeep"
let age = 23

//old way
// let user = {name:name, age:age}
let user = {name, age}
console.log(user)

//computed property names
let key = "score"
let obj = {
    [key]: 100
}
console.log(obj)

//method shorthand
let newUser = {
    name: "Pradeep",
    //old way
    // greet: function() {return `Hi ${this.name}`}
    //shorthand
    greet() {return `hi ${this.name}`}
}

