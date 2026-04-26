//Fetch users and filter
async function getUserFromCity(cityName) {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) throw new Error("Failed")
        let users = await response.json()

        let filtered = users.filter(user => 
            users.address.city.toLowerCase() === cityName.toLowercase()
        )

        console.log(`Users from ${cityName}:`, filtered.map(u => u.name))
    } catch (err) {
        console.log("Errors:", err.message)
    }
}

getUserFromCity("Gwenborough")
