// create a function addStudent(name, marks) that creates a new student card and appends it to the container every time it's called. Test it by calling it 3 times with different values.

let container = document.querySelector("#container")

function addStudent(name, marks) {
    let div = document.createElement("div")

    div.innerHTML = `
    <h3>${name}</h3>
    <p>Marks: ${marks}</p>
    <p>Result: ${marks >= 50 ? "Pass" : "Fail"} </p>
`
container.appendChild(div)

}


addStudent("Pradeep", 56)
addStudent("Rohan", 99)
addStudent("Atul", 78)