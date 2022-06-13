let str = "Hi,heli is a QA Engineer. I'll ";


//this has O(n) but this won't work if we want to check lot of values
function disemvowel(str) {
  var strArr = str.split('');
  for (var x = 0; x < str.length; x++) {
    var char = str[x].toLowerCase();
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      strArr[x] = '';
    }
  }
  return strArr.join('');
}

/* n2 complexity so use above method 
const vowels = ["a", "e", "i", "o", "u"];
let splitstr = str.split('');
splitstr.forEach(e => {
  if(vowels.includes(e)) {
    splitstr.splice(splitstr.indexOf(e), 1);
  }
});
console.log(splitstr.join(''));
*/