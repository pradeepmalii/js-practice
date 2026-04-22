//call stack 
function greet(name){
    return `Hello ${name}`
}

function main(){
    let result = greet("Pradeep")
    console.log(result)
}

main()

// The problem - blocking
// let data = fetchDataFromServer()
// console.log(data)
// console.log("This waits 5 seconds to prints")

//The solution - Event Looping
console.log("1-start")

setTimeout(function(){
    console.log("2 - inside timeout")
}, 2000)

console.log("3 - end")