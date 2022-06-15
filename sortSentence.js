const t0 = performance.now();

let s = "is2 sentence4 This1 a3";
//output : This is a  sentence
let arr = s.split(' ');

let myMap = new Map(); //use map instead of obj bcoz obj key has to be string. Whereas Map can store int.

arr.forEach(element => {
  myMap.set(parseInt(element.charAt(element.length-1)), element.substring(0,element.length-1))
});

let output = [];
for(let i=1; i<=arr.length;i++){
  output.push(myMap.get(i));
}
console.log(output.join(' '));

const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
