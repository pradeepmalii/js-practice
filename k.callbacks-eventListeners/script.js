//what is callback function in JavaScript
setTimeout(function (){
    console.log("timer")
}, 5000)

function x(y){
    console.log("x")
    y()
}
x(function(y){
    console.log("y")
})


//callback example using closures Demo with Event listeners
//count the number of times button is clicked
function attachEventListeners(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("You clicked the button", ++count)
})
}
attachEventListeners()
