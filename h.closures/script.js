// function x(){
//     var a = 1

//     function y(){
//         console.log(a)//the function y is bind to variable of funcion x that means it forms a closures and it has access to its parents lexical scope
//     }
//     y()
// }
// x()



// function a(){
//     var x = 4

//     function b(){
//         console.log(x)
//     }
//     x = 100
//     return b //here not just function b returned but the whole lexical environment got return(closures = function + it's lexical environment) 
// }
// var p = a() //here once a is called and executed, a is gone and no longer exist in the call stack and now function b no longer resides in function a and function b now belongs to var p . so var p is now a function reference and store function b that's why we can invoke p as function 
// console.log(p) //these statement prints whatever stored in p

// p()//these statement executes whatever stored in p


// //THIS IS SAME AS ABOVE EXAMPLE JUST RETURNING FUNCTION B DIRECTLY  
// // function a(){
// //     var x = 4
// //     return function b(){
// //         console.log(x)
// //     }
// // }
// // var p = a()
// // console.log(p)
// // p()


//THREE LEVEL FUNCTION
function l(){
    var e = 90
    function m(){
        var f = 80
        function n(){
            console.log(e,f)
        }
        e = 900
        return n
    }
    return m()
}

var s = l()
s()
