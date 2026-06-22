"use strict"

//this in global scope
console.log(this) //globalObject - window 


// this inside a function
function x(){
    // value of this over here depends on strict and non strict mode 
    console.log(this) //JS works differently in strict mode and non-strict mode 
}



// this in strict mode - (this substitution)
// if value of this is undefined or null then this wil be replaced with global object only in non strict mode 


// this value depends on how the function is called (window)
x() //if called without reference then undefine
window.x() //here it is window object 

// this inside a object's method
const student = {
    name: "Deep",
    printName: function(){
        console.log(this.name) //value of this is obj
    }
} 
student.printName()

const student2 = {
    name: "Ram"
}


// call apply bend methods (sharing methods)
student.printName.call(student2)


// this inside arrow function 
//arrow does not have this keyword it's like they don't have this binding to it 
const obj = {
    a: 10,
    x: () => {
        console.log(this) //value of this is window obj (not inside a global space but enclosed in that lexical context )
    }
}
obj.x()


// this inside nested arrow functionconst obj = {
const obj2 = {
    a: 10,
    p: function () {
        const q = () => {
            console.log(this) //value of this is obj2 {a: 10, p:f} bcz for method p lexical context if is obj2
                            //arrow function don't provide their own this binding(it retains the this value of enclosing lexical context)
        }
         q()
    }
}

obj2.p()



// this inside DOM 
//check index.html -> ans the value is reference to html element 

