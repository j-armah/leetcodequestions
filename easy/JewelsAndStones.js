/*
https://leetcode.com/problems/jewels-and-stones/

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/


var numJewelsInStones = function(jewels, stones) {
    let jewelsArr = jewels.split('')
    let jewelHash = {}
    
    for(const jewel of jewelsArr){
        jewelHash[jewel] = 0
    }
    
    for(i=0; i < jewelsArr.length; i++){
        for(let j=0; j < stones.length; j++){
            if(jewelsArr[i] === stones[j]){
                jewelHash[jewelsArr[i]] += 1
            }
        }
    }
    
    const jewelCount = Object.values(jewelHash).reduce((a, b) => a + b, 0)
    
    console.log(jewelCount)
    return jewelCount
};