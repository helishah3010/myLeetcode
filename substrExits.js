/*
if string is substr of other string. 
you can do this by doing include and Regex. But with Regex, you cannot find the index at which the substring is present

here we will compare each element of subStr and if match is found, we will store it. When the next letter is not a match, we will erase the store. 
*/
let str = "lotifleetcode";
let subStr = "leet"; //lleetcode
let i = 0; 
let j = 0;
let store = "";
let index = 0;
while(i<str.length && j< subStr.length){
  if(str[i]!==subStr[j]){
    if(store!=""){
      store ="";
    }
    //i++;   -> so that lleetcode
    j=0;
  } 
  else{
    store+=str[i];
    if(j==subStr.length-1){
      //after we reach to t, we are sure that substr match. So now we can get index of i.
      index = i - subStr.length +1;
      break;
    }
    i++;
    j++;
  }
}

console.log(store);
console.log(index);