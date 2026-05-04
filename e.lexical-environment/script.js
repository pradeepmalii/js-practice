// function a(){
//     console.log(b)
// }
// var b = 10
// a()

function a(){
    c()
    function c(){
        console.log(b)
    }
}
var b = 10
a()


function z(){
    var x = 100
}

console.log(x)