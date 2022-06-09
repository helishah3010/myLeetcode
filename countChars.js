// count characters in the string. For practice i have written function and callback but you can just use code.
//Here I have used object to store character and it's occurence

let input = "abffbaffff!";
let count = {};
let output = "";

function countChar(str) {
  str.split('').forEach(element => {
    if(count[element]) { //if there is character inside object, then increment its value by 1
      count[element] = count[element] + 1;
    } else { // if we encountered char for the first time then set the value
      count[element] = 1;
    }
});
  return count;
}

function getOutput(count) {
  for(const char in count){
    output += char + count[char]; 
  }
  return output;
}

//instead of running 2 functions separately, i passed function as callback function
console.log(getOutput(countChar(input)));