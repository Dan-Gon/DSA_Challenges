//Given a list, swap two adjacent nodes

let list = [1,2,3,4]

const NodeSwapper = (list) =>{
    let swapped = []
    for(let x = 0; x < list.length; x++){
        if(list.length ===0){
            return;
        }
        else{
          let swapNew = swap(list.data, list.data.next);
          swapped.push(swapNew);
        }
    }
    return swapped;
}

console.log(NodeSwapper(list))