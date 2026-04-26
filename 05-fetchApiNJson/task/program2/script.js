//Fetch with error handling
async function getPost(id){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(!response.ok) throw new Error(`Post ${id} not found`)
            let post = await response.json()    
            console.log(post.title)
    } catch (err) {
        console.log("Error:", err.message)
    }
}

getPost(1)
getPost(9999)