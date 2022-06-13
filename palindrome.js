//It uses 2 pointers.one from start and one from end. Compare till middle of string

let str = "A man, a plan, a canal: Panama";
var strArr = str.replace(/[:,\s]/g, '').toLowerCase();
//console.log(strArr);
let end = Math.floor(strArr.length/2);
let arr = strArr.split('');
//console.log(arr)

function isPalin(arr){
  let i=0;
  let j=arr.length-1;
  //console.log(j)
  while(i <= end){
    //console.log(arr[i]);
    if(arr[i] == arr[j]){
      
      i++;
      j--;  
    } else {
      return "not palindrome";
    }
  }
  return "is Palindrome"
}
console.log(isPalin(arr))









/* for better time and space complexity use above code. 
const str = "02/02/2020";
let processedStr = str.replace(/\//g, '');
//console.log(processedStr);
let reversedStr ="";
for(let i=processedStr.length-1;i>=0;i--){
  reversedStr+=processedStr[i];
}
function isPalindrom(input){
  //console.log(reversedStr);
  if(input === undefined || input === null){
    return false;
  } else if(input === reversedStr){
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrom(processedStr));
 */