var a = 10
function b(){
    var x = 100
}

console.log(a) // here we can access the variable a because it is declared in global scope and it is hoisted to the top of the scope but the value is assigned at the line where it is declared so it gives 10 as output
console.log(b) // here we can access the function b because it is declared in global scope and it is hoisted to the top of the scope but the value is assigned at the line where it is declared so it gives the whole function code as output
console.log(window.a)// here we can access the variable a using window object because var creates a property in global object but let and const does not create a property in global object
console.log(this.a) // here this keyword also gives the value of a because in global context this keyword also points to window object but in case of function this keyword will point to the function itself
console.log(x) // here we cannot access the variable x because it is declared inside the function b and it is not a global variable so it is not accessible outside the function b

//window connects JS to the browser
