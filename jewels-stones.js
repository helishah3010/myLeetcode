const jewels = "aA";
const stones = "aAAbbbb";

/* without using in-built method, use object to store jewels
and then 1. if storej[stone[i]] -> if each letter exists in obj then c++
2. if(stone[i] in storej) 
 */


// with in-built method includes
const nj = jewels.split('');
const ns = stones.split('');
let count = 0;
ns.forEach(stone=> {
  if(nj.includes(stone)){
    count++;
  }
})
console.log(count);
