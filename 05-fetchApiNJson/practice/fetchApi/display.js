let btn = document.querySelector("#btn")
let container = document.querySelector("#container")

btn.addEventListener("click", async function(){
    container.textContent = "Loading..."

    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok) throw new Error("Failed to fetch")
        let users = await response.json()

        container.innerHTML = ""

        users.forEach(user => {
            let card = document.createElement("div")
            card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
            `
            container.appendChild(card)
        })
    } catch (error){
        container.textContent = `Error: ${error.message}`
    }
})