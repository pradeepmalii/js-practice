//Build a student card
let students = [
    {name: "Pradeep", marks: 88},
    {name: "Rohan", marks: 77},
    {name: "Sita", marks: 66}
]

let container = document.querySelector("#container")

students.forEach(student => {
    let div = document.createElement("div")
    div.innerHTML = `
    <h3>${student.name}</h3>
    <p>Marks: ${student.marks}</p>
    <p>Result: ${student.marks >= 50 ? "Pass" : "Fail"}</p>
    `
    container.appendChild(div)

})