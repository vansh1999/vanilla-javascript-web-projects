

let lower = 20

let upper = 25


let sum =0

let twentyOne = 0
let twentyTwo = 0
let twentyThree = 0
let twentyFour = 0 
let twentyFive = 0



for (let i = 1; i <=100; i++) {
    
    result = Math.floor(( Math.random() * (upper - lower) + 1))  + lower
    
    console.log(`${i}::${result.toFixed(0)}`);
    sum = sum + result

    if (result == 21) {
        twentyOne = twentyOne + 1
    }
    else if(result == 22)(
        twentyTwo = twentyTwo + 1
    )
    else if(result == 23)(
        twentyThree = twentyThree + 1
    )
    else if(result == 24)(
        twentyFour = twentyFour + 1
    )
    else if(result == 25)(
        twentyFive = twentyFive + 1
    )
    else{
        return 0
    }

}


console.log(`sum is :: ${sum}`);

console.log(`21 came : ${twentyOne} times!`);
console.log(`22 came : ${twentyTwo} times!`);
console.log(`23 came : ${twentyThree} times!`);
console.log(`24 came : ${twentyFour} times!`);
console.log(`25 came : ${twentyFive} times!`);

