let nums = [4,0,0,1,1,1,2,2,3,3,4];
let store = [];

function removeDup(nums) {
  for(let i=0;i<nums.length;i++){
    if(store.includes(nums[i])){  //can use indexOf
      
    } else {
      store.push(nums[i]);
    }
  }
  return store;
}

console.log(removeDup(nums));

/* 
Other methods
- Set() > only has unique values
- if element present > then replace it with empty string
- 
*/