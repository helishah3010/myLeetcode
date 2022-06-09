//longest common prefix
/*
console.log(1, prefix([]));
console.log(2, prefix([""]));
console.log(3, prefix(["abc"]));
console.log(4, prefix(["abcdefgh", "abcde", "abe"]));
console.log(5, prefix(["abc", "abc", "abc"]));
console.log(6, prefix(["abc", "abcde", "xyz"]));
*/
//let str = ["flower", "flow", "floght", "floe"];

function prefix(str){
// edge case - that if str is empty
  if(str.length == 0) {
    return "";
  } else {
    for(let i=0;i<str[0].length;i++){ // fetch each word
      for(let j=1;j<str.length;j++){ // each letter
        if(str[0][i] !== str[j][i]){ //loops until it finds mismatch and then it returns
          return str[0].slice(0,i);
        } 
      }
    }
    return str[0];
  }
  
}
console.log(prefix(str));