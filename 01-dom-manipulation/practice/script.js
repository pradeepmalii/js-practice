console.log("JS Connected!!!")

//SELECTING ELEMENTS
let heading = document.getElementById("heading")
console.log(heading)

let texts = document.getElementsByClassName("text")
console.log(texts)

let paragraphs = document.getElementsByTagName("p")
console.log(paragraphs)

let firstText = document.querySelector(".text")
let btn = document.querySelector("#btn")
let firstLi = document.querySelector("li")
console.log(firstText,btn,firstLi)

let allTexts = document.querySelectorAll(".text")
let allLi = document.querySelectorAll("li")
console.log(allTexts,allLi)


//READING AND MODIFYING CONTENT
let demoHeading = document.querySelector("#heading")

console.log(demoHeading.textContent)
console.log(demoHeading.innerHTML) 

demoHeading.textContent = "Hello Pradeep"
demoHeading.innerHTML = "Hello <italic>Pradeep</italic>"


let para = document.querySelector(".text")
para.textContent = "<strong>Bold?</strong>"
para.innerHTML = "<strong>Bold!</strong>"


//MODIFYING STYLES AND CLASSES
let demoHeading1 = document.querySelector("#heading")

demoHeading1.style.color = "red"
demoHeading1.style.font = "40px"
demoHeading1.style.backgroundColor = "yellow"

demoHeading1.classList.add("highlight")
demoHeading1.classList.remove("highlight")
demoHeading1.classList.toggle("highlight")    
demoHeading1.classList.contains("highlight") 


//Modifying Attributes
let demoBtn = document.querySelector("#btn")

console.log(demoBtn.getAttribute("id"))

demoBtn.setAttribute("disable", true)
demoBtn.setAttribute("class", "primary-btn")

demoBtn.removeAttribute("disabled")


//CREATING AND INSERTING ELEMENTS
let newItem = document.createElement("li")
newItem.textContent = "Item 4"

let list = document.querySelector("#list")

list.append(newItem)  //to add at the end of the list
// list.prepend(newItem)  to add at the start of the list 


//REMOVING ELEMENTS
let demoList = document.querySelector("#list")
let firstItem = document.querySelector("li")

firstItem.remove()

list.removeChild(list.firstElementChild)