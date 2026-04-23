fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

async function getData(){
    try{
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


//Understanding the two awaits
async function getData(){
    let response = await fetch(url)

    let data = await response.json()
}


 //Checking response status
 async function getData(url){
    try{
        let response = await fetch(url)

        if(!response.ok){
            throw new Error(`HTTP error: ${response.ststus}`)
        }

        let data = await response.json()
        return data
    } catch (error){
        console.log("Error:", error.message)
    }
 }

 //Using fake api for practice
 async function getUsers(){
    try{
        let response = await fetch("http://jsonplaceholder.typicode.com/users")

        if(!response.ok) throw new Error(`Error: ${response.status}`)

        let users = await response.json()
        console.log(users)
        console.log(users[0].name)
        console.log(users.length)
    } catch (error) {
        console.log("Error:", error.message)
    }
 }

 getUsers()


 //Get single user by id 
 async function getUser(id) {
    try{
        let rsponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!response.ok) throw new Error("User not found")
        let user = await response.json()
        console.log(user)         
    } catch (error) {
        console.log("Error:", error.message)
    }
 }

 getUser(1)
 getUser(999) //will hit the error


 //POST Request — sending data
 async function createPost(title, body){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, body, userId: 1})
        })

        if (!response.ok) throw new Error("Failed to create post")

        let newPost = await response.json()
        console.log("Created:", newPost)
    } catch (error) {
        console.log("Error:", error.message)
    }
 }

 createPost("My First Post", "This is the body of the post")