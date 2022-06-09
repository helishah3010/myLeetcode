// Sliding window
// Given an array of 0s and 1s, find max subsequence of continuous 1s that can be formed by flipping at-most k 0s to 1s.
 
let arr = [0,1,0,1,0,1,1,1, 0, 1, 1, 1, 1, 0];
const flip = 2; //a zero can be flipped max 2 times
let length = 0;
for(let i=0;i<arr.length-1;i++){
  let countZ =0;
  for(let j=i;j<arr.length;j++){
     if(arr[j] == 0){
       countZ++;
       if(countZ > flip){
        break;
       }
     } 
     if(length <= j-i+1){
       length = j-i+1;
     } 
  }
}
console.log(length);