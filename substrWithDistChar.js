/* Substrings of Size k with Distinct Characters
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
*/
const str = "xyzzaziduhfyyf";
const k=3;
let newStr = [];
let result = [];
for(let i=0;i<str.length-k;i++) {
  newStr.push(str.slice(i, i+k));
  
  if(newStr[i][0]!=newStr[i][1] && newStr[i][0]!=newStr[i][2] && newStr[i][1]!=newStr[i][2]){
    result.push(newStr[i]);
  }
}
console.log(result);
