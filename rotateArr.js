//rotate array with k elemt steps
//there are multiple approach but this one is good from space complexity wise

let nums = [-1,-100,3,99];
const k = 2;
let pick = 0;
for(let i=0;i<nums.length-k;i++){
  pick = nums.shift(nums[i]);
  nums.push(pick); 
}
console.log(nums);