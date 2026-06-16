const faceBookUsers = 
[
    {firstName: "Deep", lastName: "Mali", age: 22},
    {firstName: "Reep", lastName: "Kali", age: 23},
    {firstName: "Meep", lastName: "Male", age: 21},
]

// find firstname of all the users whose age is less than 30

const filterOutput = faceBookUsers.filter((x) => x.age < 22).map((x) => x.firstName)


console.log(filterOutput)