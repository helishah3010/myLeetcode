//first unique character in a string

let s = "loveleetcode";
let arr = s.split("");

//when there will be duplicate, lastindexof will not be i.
for(let i=0;i<arr.length;i++){
  if(arr.lastIndexOf(arr[i]) == i){
    console.log(arr[i]);
    break;
  }
}

