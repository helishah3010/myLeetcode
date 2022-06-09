// Longest palindromic substring
//let s = "babad";
let s = "babmadam"
let str = s.split('');
let win = 0;

function isPal(start, end){
  let parr = [];
  let spliced = str.slice(start, end+1);
  //console.log(spliced);
  
  for(let i=end;i>=start;i--){
    parr.push(str[i]);
  }
  //console.log(parr);
  if(parr.join('') === spliced.join('')){ //bcoz you cannot compare array using equals
    return true;
  } else {
    return false;
  }
}
//console.log(isPal(0, 2));
for(let i=0;i<str.length-2;i++){
  for(let j=i+2;j<str.length;j++){ // j is i+2 bcoz 2 letter are always a palindrome so we start from 3
    if(isPal(i, j)){
      if(win < j-i+1){
        win = j-i+1;
        console.log(str.slice(i, j+1));
      }
      
    } 
  }
}
console.log(win)