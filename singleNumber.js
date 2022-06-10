let nums = [4,1,2,1,2,3];
let store = {};

function singleNumber(nums){
  nums.forEach(element => {
    if(store[element]){
      store[element] = store[element] + 1;
    } else {
      store[element] = 1;
    }
  });
  //now object has occurences of all elements. We will find element with 1 occurence
  for(let i in store){
    if(store[i] == 1){
      return i;
    }
  }
}
console.log(singleNumber(nums))
//convert object to array
