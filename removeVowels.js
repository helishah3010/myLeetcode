let str = "Hi,heli is a QA Engineer. I'll ";
const vowels = ["a", "e", "i", "o", "u"];
//console.log(str.split(','));
let splitstr = str.split('');
console.log(splitstr);
splitstr.forEach(e => {
  if(vowels.includes(e)) {
    splitstr.splice(splitstr.indexOf(e), 1);
  }
});
console.log(splitstr.join(''));
