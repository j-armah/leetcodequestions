/**
 * 
 * 
 */

// My sol O(n) - time | O(n)
 var checkIfPangram = function(sentence) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let alphaHash = {}
    
    for(let i=0; i < alphabet.length; i++){
        const char = alphabet[i]
        alphaHash[char] = 0
    }
    
    for(let i=0; i < sentence.length; i++){
        alphaHash[sentence[i]] += 1
    }
    
    let counts = Object.values(alphaHash)
    
    for(const count of counts){
        if(count === 0) return false
    }
    
    return true
};