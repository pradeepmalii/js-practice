//Add items to list dynamically
let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let list = document.querySelector("#list")
let counter = document.querySelector("#counter")

function updateCounter(){
    let count = list.children.length
    counter.textContent = `Total ${count} ${count > 1 ? "items" : "item"}`
}

btn.addEventListener("click", function(){
    let value = input.value.trim()

    if(value === "") return
    
    let li = document.createElement("li")
    li.textContent = value

    // let span = document.createElement("span")
    // span.textContent = value

    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete"

    // li.appendChild(span)
    li.appendChild(delBtn)
    list.appendChild(li)

    input.value = ""
    updateCounter()
})


//extend program 2 , clicking an li removes it 
list.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        let li  = e.target.closest("li")
        li.remove()
        updateCounter()


    }
})

// when btn is clicked both first and second prints that is why addEventListener is preferred than onclick bcz it allows multiple listeners on the same time
// let demobtn = document.querySelector("#btn")
// demobtn.addEventListener("click", function(){
//     console.log("first")
// })

// demobtn.addEventListener("click", function(){
//     console.log("second")
// })