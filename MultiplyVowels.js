const multiplyVowels = (str,n) => {
    let vowels = ['a','e','i','o','u'];
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            newStr += str[i].repeat(n);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(multiplyVowels('sleep',10));