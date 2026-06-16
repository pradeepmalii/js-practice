const instaUsers = 
[
    {firstName: "Deep", lastName: "Mali", age: 22},
    {firstName: "Reep", lastName: "Kali", age: 23},
    {firstName: "Meep", lastName: "Male", age: 21},
]

//find people with age 22 and 23
//{22: 2, 23: 1}

const ageUser = instaUsers.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1
    }
    return acc;
}, {})
console.log(ageUser)


// find firstname of all the users whose age is less than 22
const ageLess = instaUsers.reduce(function(acc, curr){
    if (curr.age < 22){
        acc.push(curr.firstName)
    }
    return acc
},[])  
console.log(ageLess)