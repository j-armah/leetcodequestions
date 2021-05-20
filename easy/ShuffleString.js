/*
https://leetcode.com/problems/shuffle-string/

*/

var restoreString = function(s, indices) {
    let array = new Array(s.length).fill('')
    
    for(let i=0; i < s.length; i++){
        const char = s[i]
        const idx = indices[i]
        
        array[idx] = char
    }
    
    return array.join('')
};