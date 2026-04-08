//Safe data access
let users = [
    {name: "Pradeep", address: {city: "Mumbai"}},
    {name: "sham"},
    {name: "ram", address: {city: "Delhi"}}
]

users.forEach(user => {
    console.log(user?.address?.city ?? "City not provided")
})