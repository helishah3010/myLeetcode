// remove duplicates from array

let arr = [1,2,1,4,5];
let uniArr = [arr[0]];

for(let i=1;i<arr.length;i++){
  if(!uniArr.includes(arr[i])){
    uniArr.push(arr[i]);
  }
}

console.log(uniArr);