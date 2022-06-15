// reverse string in constant space. Meaning reverse given string without using another space.

let str = ['s', 't', 'r', 'i', 'n']; 

let start = 0;
let end = str.length-1;

while(start<Math.floor(str.length/2)){
  let temp = str[end];
  str[end] = str[start];
  str[start] = temp;
  start++;
  end--;

  //or you  can swap by
  //let temp = str[0];
  //str[0] = str.pop(); // but i guess pop is O(n) so not good way
}
console.log(str); 

/* reverse same string/array - O(n): using another array but reverse the same string
let str = ['s', 't', 'r', 'i', 'n']; 
let stack = [];

for(let i=str.length-1;i>=0;i--){
  stack.push(str[i]);
}
//console.log(stack);
 
//for(let i=0;i<stack.length;i++){
//  str[i] = stack[i];
//} 
stack.forEach((st,i)=>{
  str[i] = st;
})


console.log(str); */
