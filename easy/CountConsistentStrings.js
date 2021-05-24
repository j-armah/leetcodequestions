/* 
https://leetcode.com/problems/count-the-number-of-consistent-strings/

*/

var countConsistentStrings = function(allowed, words) {
    let result = []
    
    
    for(let i=0; i < words.length; i++){
        const word = words[i]
        for(let j=0; j < word.length; j++){
            const char = word[j]
            if(!allowed.includes(char)) break
            else if(j === word.length - 1) result.push(word)
        }
    }
    
    return result.length
};