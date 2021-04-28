/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * 
 * 
 * A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
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

// Using set

var checkIfPangram = function(sentence) {
    return new Set(sentence.split("")).size == 26;
};