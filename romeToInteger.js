// rome to integer
const s = "LVIII";
const arr = s.split(''); 
const romanList = {
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}
let i=0;
let sum = 0;
while(i < arr.length){
  if(romanList[arr[i]]){
    if(arr[i] === 'I'){
      if(arr[i+1] == 'V' || arr[i+1] == 'X'){
        sum += romanList[arr[i+1]] - romanList[arr[i]];
        i+=2;
      } else {
        sum += romanList[arr[i]];
        i++;
      }
    } else if(arr[i] === 'X'){
      if(arr[i+1] == 'L' || arr[i+1] == 'C'){
        sum += romanList[arr[i+1]] - romanList[arr[i]];
        i+=2;
      } else {
        sum += romanList[arr[i]];
        i++;
      }
    } else if(arr[i] === 'C'){
      if(arr[i+1] == 'D' || arr[i+1] == 'M'){
        sum += romanList[arr[i+1]] - romanList[arr[i]];
        i+=2;
      } else {
        sum += romanList[arr[i]];
        i++;
      }
    } else {
      sum += romanList[arr[i]];
      i++;
    }
  } else {
    console.log("Invalid roman input");
    break;
  }
}
console.log(sum);