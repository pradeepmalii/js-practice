function fetchUser(id) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if (id > 0) resolve({id: id, name: "Pradeep"})
                else reject("Invalid ID")
        }, 1000)
    })
}


fetchUser(1)
.then(user => console.log(user))
.catch(err => console.log(err))

async function getUser() {
    try{
        let user  = await fetchUser(1)
        console.log("User:", user)
    } catch (error) {
        console.log("Error:", error)
    } finally {
        console.log("Done!")
    }
}

getUser()