/*

*/

function generateDocument(characters, document) {
    // Write your code here.
      let charsHash = {}
      
      for(let i=0; i < characters.length; i++){
          if(charsHash[characters[i]]){
              charsHash[characters[i]] += 1
          } else {
              charsHash[characters[i]] = 1
          }
      }
      
      for(let i=0; i < document.length; i++){
          const char = document[i]
          if((char in charsHash) && charsHash[char] > 0){
              charsHash[char] -= 1
          } else {
              return false
          }
      }
    return true;
}