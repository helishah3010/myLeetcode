// Find maximum no of words found in the sentences
var sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let nWords = [];
sentences.forEach(element => {
  let arrElement = element.split(' ');
  nWords.push(arrElement.length);
});
console.log(nWords);