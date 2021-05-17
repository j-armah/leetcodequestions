/*
https://www.algoexpert.io/questions/Tournament%20Winner
*/

function tournamentWinner(competitions, results) {
    // Write your code here.
      let teamsHash = {}
      
      for(let i=0; i < competitions.length; i++){
          let competition = competitions[i]
          for(let j=0; j < competition.length; j++){
              if(!teamsHash[competition[j]]){
                  teamsHash[competition[j]] = 0
              }
          }
      }
      
      for(let i=0; i < results.length; i++){
          let result = results[i]
          
          if(result === 0){
              teamsHash[competitions[i][1]] += 3
          } else {
              teamsHash[competitions[i][0]] += 3
          }
      }
      
      // console.log(teamsHash)
      
      let winner = Object.keys(teamsHash).reduce((a, b) => teamsHash[a] > teamsHash[b] ? a : b)
      
      // console.log(winner)
    return winner;
  }