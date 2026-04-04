//build a list dynamically
let fruits = ["Apple", "Banana", "Mango", "Orange"]
let list = document.querySelector("#list")

list.innerHTML = ""

fruits.forEach(fruit => {
    let li = document.createElement("li")
    li.textContent = fruit
    list.appendChild(li)
})