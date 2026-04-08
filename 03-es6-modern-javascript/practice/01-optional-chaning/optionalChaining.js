let user = {
    name: "Pradeep",
    address: {
        city: "Mumbai"
    }
}

//Without Optional chaning - dangerous
// console.log(user.address.city)
// console.log(user.phone.number)


//with Optinal chaning - safe
console.log(user?.address?.city)
console.log(user?.phone?.number)