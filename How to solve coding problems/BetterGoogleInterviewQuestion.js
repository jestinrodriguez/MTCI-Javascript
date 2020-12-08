// collection of numbers and find a matching pair

[1,2,3,9] = 8
[1,2,4,4] = 8



// Naive - Nested loops - O(n^2)
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for(var i =0; i<len-1; i++){
       for(var j = i+1;j<len; j++){
          if (arr[i] + arr[j] === sum)
              return true;
       }
    }
  
    return false;
  }
  
  // SET -
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set


  // Better
  function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
    }
    return false;
  }
  
  hasPairWithSum2([6,4,3,2,1,7], 9)

