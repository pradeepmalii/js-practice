let user = {
    name: "Pradeep",
    age: 0,
    isStudent: false
}

console.log(user.age || "Age not provided") //here 0 is valid but preferred string 

console.log(user.isStudent || "not provided") //here false is valid but preferred string 

//Solution with ??
console.log(user.age?? "Age not provided")
console.log(user.isStudent?? "not provided")
console.log(user.email?? "not provided")



