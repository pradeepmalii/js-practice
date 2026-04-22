let promise = new Promise(function(resolve, reject){
    let success = true

    if (success) {
        resolve("Data received!")
    }
    else {
        reject("Something went wrong!")
    }
})

promise
    .then(function(result){
        console.log(result)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log("Always runs - success or failure")
    })



//Real Example — simulating API call
function fetchUser(id) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (id > 0) {
                resolve({id: id, name:"Pradeep"})
            } else {
                reject("Invalid user Id")
            }
        }, 1000)
    })
}

fetchUser(1)
        .then(user => {
            console.log("User:", user)
            return user.id
        })
        .then(id => {
            console.log("User ID:", id)
        })
        .catch(error => {
            console.log("Error:", error)
        })
        .finally(() => {
            console.log("Done!")
        })