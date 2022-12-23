

const sorter = (list1, list2) =>{
    let final = list1.concat(list2);
    return final.sort();
}

let list1 = [1,2,4,3];
let list2 = [5,6,1,4];

console.log(sorter(list1,list2));