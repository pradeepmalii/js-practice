let heading = document.querySelector("#heading")
let colors = ["red", "blue", "green", "purple", "orange"]
let i = 0
heading.style.color = colors[i % colors.length]
i++