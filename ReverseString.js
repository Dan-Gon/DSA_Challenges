const reverseString = (n) => {
    //Declare empty array to push new string in to.
    return n.split('').reverse().join('');
}
console.log(reverseString("Hello my name is"));
//Returns si eman ym olleh

//For loop version
const loopReverse = (sentence) =>{
    let newSentence = [];
    for(x = sentence.length-1; x >= 0; x--){
        newSentence.push(sentence[x]);
    }
    return newSentence.join('');
}
console.log(loopReverse("Hello I am"));
