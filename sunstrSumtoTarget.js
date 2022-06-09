//Sliding window
//Find subarray that adds up to given number. Here number is 7
// for reference see question 2 of this video https://www.youtube.com/watch?v=jM2dhDPYMQM
const arr = [-1, -4, 0, 5, 3, 2, 1]
//const arr = [1,7,4,3,1,2,1,5,1];
const target = 5;
let subArr = [];
for(let i=0;i<arr.length;i++){
  let sum = 0;
  for(let j=i;j<arr.length;j++){
    sum+=arr[j];
    if(sum==target || arr[j] == target) {
      subArr.push(arr.slice(i,j+1));
    } else if(sum > target) { //if sum is greater than 7 we just want to shift ///i and make sum 0
      break;
    }
  }
}
console.log(subArr)