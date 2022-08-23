//We want to return the indices of where two arrays intersect. 

//Declare two arrays
let a = [1,4,5,6];
let b = [2,3,4,5,6];

//function to find intersection
const unionizeWhere = (a,b) =>{
    let intersection = [];

    if(a.some(index=> b.includes(index)) ===true) {
        for (let x = 0; x < a.length; x++) {
            for (let i = 0; i < b.length; i++) {
                if (a[x] === b[i]) {
                    intersection.push(x)
                }
            }

        }

        return intersection;
    }
    else {
        return null;
    }

}

console.log(unionizeWhere(a,b))