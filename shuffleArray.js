// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn]

var shuffle = function(nums, n) {
  newArray = [];
  
  for (i=0; i < n; i++) {
    newArray.push(nums[i]);
    newArray.push(nums[i+n]);
  }

  return newArray;
    
};


shuffle([2,5,1,3,4,7], 3);