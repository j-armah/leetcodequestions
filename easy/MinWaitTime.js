/*
https://www.algoexpert.io/questions/Minimum%20Waiting%20Time
*/

function minimumWaitingTime(queries) {
    // Write your code here.
      let sorted = queries.sort((a,b) => a-b)
      let waitTime = 0
      if(queries.length <= 1) return 0
      
      for(let i=0; i < sorted.length; i++){
          let duration = sorted[i]
          let queriesLeft = queries.length - (i + 1)
          waitTime += duration * queriesLeft
      }
      
      return waitTime
  }