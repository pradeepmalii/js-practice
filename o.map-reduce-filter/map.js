const users = 
[
    {firstName: "Deep", lastName: "Mali", age: 22},
    {firstName: "Reep", lastName: "Kali", age: 23},
    {firstName: "Meep", lastName: "Male", age: 21},
]

//list of fullname
const nameOutput = users.map((x) => x.firstName +" "+ x.lastName)
console.log(nameOutput)
