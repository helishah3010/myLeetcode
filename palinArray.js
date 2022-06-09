let words = ["abc","car","ada","racecar","cool"];

function isPalindrome(words){
  let newStr = [];
  words.forEach(ele => {
    let revStr = "";
    for(let i=ele.length-1;i>=0;i--){
      revStr+=ele[i];
    }
    if(revStr === ele){
      newStr.push(ele);
    }
  });
  return newStr;
}
console.log(isPalindrome(words));