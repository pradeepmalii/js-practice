// a() can call function statement before it appears in code 
//FUNCTION STATEMENT / DECLARATION
function a(){
    console.log("a called")
}


// b() can not call function expression before it appears in code
//FUNCTION EXPRESSION
var b = function(){
    console.log("b called")
}
//these is arrow function exapmle of function expression
// let z = (a,b) => {
//     console.log(a+b)
// }
// z(1,1)


//ANONYMOUS FUNCTION - function without name
// function(){

// }


//NAMED FUNCTION EXPRESSION
const greet = function hello(){
    console.log("Helloooo")
}
// greet() works fine
//hello() gives refernce error as it behaves as local function and gives error outside it's own scope


//DIFFERENCE BETWEEN PARAMETENRS AMD ARGUMENTS 
// var b = function(param1, param2){
//     console.log("b called")
// }
// b(argu1,argu2)


//FIRST CLASS FUNCTION(FUNCTIONS ARE FIRST CLASS CITIZENS)
function sayhi(){
    console.log("hii")
}

function execute(fn){
    fn()
}
execute(sayhi)//here i am passing sayhi() as value

function outer(){
    return function(){
        console.log("inner function")
    }
}

let result = outer()
result()//here function return from another function just like normal data