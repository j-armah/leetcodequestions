/*


*/

var isValid = function(s) {
    //     let stack = []
        
    //     for(let i=0; i < s.length; i++){
    //         let para = s[i]
    //         switch(para){
    //             case '(': stack.push(')')
    //                 break
    //             case '{': stack.push('}')
    //                 break
    //             case '[': stack.push(']')
    //                 break
    //             default:
    //                 if(para !== stack.pop()){
    //                     return false
    //                 }
    //         }
    //     }
    //     return stack.length === 0
        
    let stack = []
    
    for(let i=0; i < s.length; i++){
        let para = s[i]
        
        if(para === '('){
            stack.push(')')  
        } else if(para === '{') {
            stack.push('}')
        } else if(para === '[') {
            stack.push(']')
        } else {
            if(para !== stack.pop()){
                return false
            }
        }
    }
    
    return stack.length === 0
};