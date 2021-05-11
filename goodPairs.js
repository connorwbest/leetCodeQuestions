// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    
  var pairs = 0;
  var seen = new Map();
  for(var i = 0; i < nums.length; i++) {
      var currNum = nums[i];
      if(seen.has(currNum)) {
          var seenBefore = seen.get(currNum);
          pairs += seenBefore;
          seen.set(currNum, seenBefore + 1)
      }
      else {
          seen.set(currNum, 1);
      }
  }
  
  console.log(pairs);    
};

numIdenticalPairs([1,2,3,1,1,3]);

