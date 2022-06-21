const vowels = [
    "a","A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"
]
const MultiplyVowels = (n) =>{
    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < n.length; j++) {
            if (vowels[i] === vowels[j]){
                return vowels[j] * 3;
            }
            else {
                console.log()
            }
        }
    }
}
MultiplyVowels("Hello");