let one = "listen";
let two = "list";

/* 
Best approach - using object - O (2n)

let s = "anagram";
let t = "nagaram";
let store = {};
let tArr = t.split('');

function isAnagram(s,t) {
  if(s.length !== t.length){
    return false;
  }
  s.split('').forEach(element => {
    if(store[element]){
      store[element]++;
    } else{
      store[element] = 1;
    }
  });
// foreach loop does not work if you want to return something
  for(const element of tArr) {
    if(element in store){   

    } else {
      //console.log(element);
      return false;
    }    
  }
  return true;
}

console.log(isAnagram(s,t));

*/



/* using sorting in-built methods
1. Length of both should be same
2. sort both strings and compare if they are same
 
//console.log("this is foo bar".split("o").length);
if(one.length!=two.length){
  console.log("not anagram");
} else {
  let sortedOne = one.split('').sort().join('');
  let sortedTwo = two.split('').sort().join('');
  if(sortedOne === sortedTwo) {
    console.log("yay anagram");
  } else {
    console.log("not anagram");
  }
}
*/

/* with using includes in-built methods
We will take each element from arr1 and if it is present in arr2, then remove that element from arr2.
If modification of array is not allowed then this approach is not ok

 if(one === two) {
   console.log("anagram");
 }else if(one.length != two.length){
   console.log("not anagram");
 } else {
    let arrA = [...one];
    let arrB = [...two];
    arrA.forEach(e=> {
        if(arrB.includes(e)){
        arrB.splice(arrB.indexOf(e), 1);
        }
    });
    console.log(arrB.length);
    if(arrB.length!=0){
    console.log("not anagram")
    } else {
    console.log("anagram");
    }

 }
  */




