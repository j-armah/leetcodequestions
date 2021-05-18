/*
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

var isAnagram = function(s, t) {
    const hash = {}
    if(s.length !== t.length) return false
    
    for(let i=0; i < s.length; i++){
        const char = s[i]
        if(hash[char]){
            hash[char] += 1
        } else {
            hash[char] = 1
        }
    }
    
    for(let i=0; i < t.length; i++){
        if(t[i] in hash){
            hash[t[i]] -=1
        }
    }
    const values = Object.values(hash)
    return !Math.max(...values) >= 1
};