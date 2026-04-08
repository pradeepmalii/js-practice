//destructure api response
let apiResponse = {
    status: 200,
    data: {
        user: {
            id: 1,
            name: "Pradeep",
            email: "mali111@gmail.comm",
            subcription: null
        }

    }
}

let {status, data: {user: {id,name,email,subscription}}} = apiResponse
console.log(status)
console.log(id)
console.log(name)
console.log(email)
console.log(subscription?? "No subcription!!")


// let a = 1
// let b = 2

// ;[a, b] = [b, a]

// console.log(a)
// console.log(b)
