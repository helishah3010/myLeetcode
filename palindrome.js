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
