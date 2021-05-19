/*

*/

var numIdenticalPairs = function(nums) {
    // O(n^2)
    // let pairs = 0
    
    // for(let i=0; i < nums.length; i++){
    //     for(let j=i+1; j < nums.length; j++){
    //         if(nums[i] === nums[j]){
    //             pairs++
    //         }
    //     }
    // }
    
    // return pairs
    
    
    // O(n)
    let pairs = 0
    let hash = {}
    
    for(let i=0; i < nums.length; i++){
        let num = nums[i]
        if(hash[num]){
            pairs += hash[num]
            hash[num] += 1
        } else {
            hash[num] = 1
        }
    }
    
    return pairs
};