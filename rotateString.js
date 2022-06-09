const str1 = "abcde";
const str2="cdeab";
let bigStr = str1+str1;

//lastIndexOf searches last occurence of the string

console.log(bigStr.lastIndexOf(str2));


// Find a match/substring using regular expressions
const reg = new RegExp(`${str2}`);
//console.log(reg);
console.log(reg.test(bigStr));