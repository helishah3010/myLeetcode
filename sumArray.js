// Running sum of array
// [1,1+2, 1+2+1, 1+2+1+5] etc

let num = [1,2,1,5,4];
let arr = [num[0]]; // [1]
let sum = num[0]; //1
for(let i=1;i<num.length;i++){
  sum += num[i];
  arr.push(sum);
}
console.log(arr);
