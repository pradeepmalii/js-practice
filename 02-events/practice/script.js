let btn = document.querySelector("#btn")

btn.addEventListener("click", function() {
    console.log("button clicked")
})


// element.addEventListener("click", callback)
// element.addEventListener("dblclick", callback)
// element.addEventListener("mouseenter", callback)
// element.addEvenetListener("mouseleave", callback)

// element.addEventListener("keydown", callback)
// element.addEventListener("keyup", callback)

// element.addEventListener("input", callback)
// element.addEventListener("change", callback)

// element.addEventListener("submit", callback)

// window.addEventListener("load", callback)
// window.addEventListener("resize", callback)

// EVENT OBJECTS
let demoBtn = document.querySelector("#btn")
demoBtn.addEventListener("click", function(event){
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.target.id)
})

//KEYBOARDS EVENTS 
let input = document.querySelector("#input")
input.addEventListener("keydown", function(e){
    console.log(e.key)
    console.log(e.code)
    console.log(e.ctrlKey)
})

//INPUT EVENT - Real time typing 
let demoInput = document.querySelector("#input")
let output = document.querySelector("#output")
input.addEventListener("input", function(e){
    output.textContent = e.target.value
})

//PREVENT DEFAULT
// let form = document.querySelector("form")
// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     console.log("form submitted without refresh!")
// })

// let link = document.querySelector("a")
// link.addEventListener("click", function(e){
//     e.preventDefault()
//     console.log("link clicked but not followed")
// })



//EVENT DELEGATION
// let items = document.querySelector("li")
// items.forEach(item => {
//     item.addEventListener("click", function(){
//         console.log(item.textContent)
//     })
// })

// let list = document.querySelector("#list")
// list.addEventListener("click", function(e){
//     if (e.target.tagName === "LI") {
//         console.log(e.target.textContent)
//     }
// })

