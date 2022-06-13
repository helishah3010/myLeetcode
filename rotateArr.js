//rotate array with k elemt steps
//there are multiple approach but this one is good from space complexity wise

/* without using shift  - O(1)*/
let nums = [-1,-100,3,99];
const k = 2;
let firstpart = nums.splice(0, nums.length-k);
 
 nums.push(...firstpart);
 console.log(nums);





/* With using shift - O(n)
let nums = [-1,-100,3,99];
const k = 2;
let pick = 0;
for(let i=0;i<nums.length-k;i++){
  pick = nums.shift(nums[i]);
  nums.push(pick); 
}
console.log(nums);

 */ 

 

/* good time complexity but more space complexity
let nums = [1,2,3,4,5,6,7];
const k = 3;
//Output: [5,6,7,1,2,3,4]
let bigArr = [...nums,...nums];
//1,2,3,4,5,6,7,1,2,3,4,5,6,7
bigArr.splice(4, 7)
console.log(bigArr); */

/* variation
Bring all 0s to the end without creating another array
let nums = [0,1,0,3,12];
let removed = 0;
for(let i=0;i<nums.length;i++){
  if(nums[i] == 0){
    removed = nums.splice(i,1);
    nums.push(removed[0]);
  }
}
console.log(nums);

 */