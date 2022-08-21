//Find the intersection between two arrays, a,b. If none exist, return null.

//Initial arrays
let a = [1,4,5,6]
let b = [2,3,4,7]

//Function
const findIntersection = (a,b) =>{
    let intersection = [];

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i] === b[j]+1 || b[j] + 1 === a[i]){
                console.log(`Found at ${a[i]} and ${b[j]}`)
            }
            else{
                console.log("not found")
            }
        }
    }
}
findIntersection(a,b);