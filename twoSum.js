// two sum
// Note: sub array means you have to compare only adjacent elemtents. 
// no need to compare 0 with 2, 3, 4.. Only compare 0 with 1 and 1 with 2
let nums = [2,7,11,15,4,5];
const target = 9;
let subArr = [];
for(let i=0;i<nums.length-1;i++){
  if(nums[i] + nums[i+1] == target){
    subArr.push(nums.slice(i,i+2));
  }  
}
console.log(subArr);