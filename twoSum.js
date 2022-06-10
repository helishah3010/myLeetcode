// two sum
// Note: sub array means you have to compare only adjacent elemtents. 
// no need to compare 0 with 2, 3, 4.. Only compare 0 with 1 and 1 with 2

/* brute force approach On2
let nums = [7,11,2,15,7];
const target = 9;

function twoSum(nums, target){
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length-1;j++){
      if(nums[i] + nums[j] == target){
        return [i,j];
      }
    }
  }
}
console.log(twoSum(nums, target)); */

// better solution
let nums = [3,2,4];
const target = 6;
let store = {};
function twoSum(nums, target){
  for(let i=0;i<nums.length;i++){
    let complement = target-nums[i];
    if(complement in store){
      return [store[complement], i];
    } else {
      store[nums[i]] = i;
    }
  }
  
    
}
console.log(twoSum(nums, target));










/* let nums = [2,7,11,15,4,5];
const target = 9;
let subArr = [];
for(let i=0;i<nums.length-1;i++){
  if(nums[i] + nums[i+1] == target){
    subArr.push(nums.slice(i,i+2));
  }  
}
console.log(subArr); */
// if we have to compare each element this won't work. This is only to check adjacent element