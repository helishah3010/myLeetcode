const input = "xxxxyggggzvvvvx";
let arr = [];
let count = {};
const k = 2;

// start.This code will not work when input is xxxxxxxxxxxxxygdsjhg
input.split('').forEach(element => {
  if(count.hasOwnProperty(element)){
    if(count[element] >= k){
      //delete count[element];
      count = {};
      arr.pop(element); //because once count is 0, the program will go to the last else block and add an element. so we remove element here
    } else {
      arr.push(element);
      count[element]+=1;
    }
  } else {
    count[element] = 1;
    arr.push(element);
  }
});

console.log(arr.join(''));
//end