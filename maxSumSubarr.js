//Find maximum sum subarray of the required size.

const arr = [-1,2,3,2,3,4,5,6,2,3,4];
const win = 3; //here window is fixed

let sumArr=0; //we will store prvious subarr sum to this var and then compare with current sum

for(let i=0;i<arr.length-win;i++){
  let sum = 0;
  for(let j=i;j<i+win;j++){ // j slides the window. So it starts with i so that when i=1, j also shifts to 1 and window slides
    sum+=arr[j];
  }
  if(sum > sumArr) {
    sumArr=sum;
  }
}

console.log(sumArr);