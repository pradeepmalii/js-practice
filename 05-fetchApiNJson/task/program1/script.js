async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await response.json()
    posts.slice(0, 5).forEach(post => {
        console.log(post.title)
    })
}
getPosts()