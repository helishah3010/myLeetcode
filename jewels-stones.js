const jewels = "aA";
const stones = "aAAbbbb";

const nj = jewels.split('');
const ns = stones.split('');
let count = 0;
ns.forEach(stone=> {
  if(nj.includes(stone)){
    count++;
  }
})
console.log(count);
