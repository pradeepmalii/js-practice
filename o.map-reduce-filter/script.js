// MAP
const arr = [1,2,3,4,5]

function double(x){
    return x*2
}

function triple(x){
    return x*3
}

function binary(x){
    return x.toString(2);
}

const output = arr.map(binary)
console.log(output)


// FILTER
// function isOdd(x){
//     return x % 2 != 0
// }

// const result = arr.filter((x) => x % 2 === 0)


const result = arr.filter(function isOdd(x){
    return x % 2 != 0
})
console.log(result)


// REDUCE
//to find sum 
function findSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] 
    }
    return sum;
}

console.log(findSum(arr))

//above is normal way below is reduce way
const resultt = arr.reduce(function(acc, curr){
    acc = acc + curr
    return acc
}, 0)
console.log(resultt)

//to finf max
function findmax(arr){
    let max = arr[0]
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > max) max = arr[i]
    }
    return max
}
console.log(findmax(arr))

//above is normal way below is reduce way
const findMax = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr
    } 
    return max

}, 0)
console.log(findMax)