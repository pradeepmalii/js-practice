if(true){
    //block is also called as compound statement
    var a = 10
    console.log(10)
}

//we use block to write multiple statement where javascript expects only one statement as block makes the multiple statement look like single statement


//BLOCKSCOPE
{
    var a = 1
    let b = 2
    const c = 3

    //so here b and c is hoisted inside the block as they are blockScope and a is hoisted globally as it is not block scope
}

console.log(a)
// console.log(b) //give referenceError
// console.log(c) //give referenceerror






//SHADOWING

var z = 122
let y = 76
{
    var z = 12
    let y = 23
    const x = 34

    console.log(z) //prints 12 bcz earlier z was 122 then shadowed by 12
    console.log(y) //prints 23
}

console.log(z)//prints 12 bcz earlier z was 122 then shadowed by 12 means blockedScoped does not apply to var
console.log(y)//prints 76 bcz it is the script scope's y(let and const are not global scope they gets stored somewhere else in temporial dead zone) as let is blocked scpoed (23's y does not exist outside block)