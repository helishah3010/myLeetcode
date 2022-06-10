let prices = [7,1,5,3,6,4];
let profit=0;

//This is function expression. FE are not hoisted like regular functions. So you cant use them before creating them
//brute force O(n2)
// var maxProfit = function(prices) {
//   for(let i=0;i<prices.length-1;i++){
//     for(let j=i+1;j<prices.length;j++){
//       let sum = prices[j] - prices[i];
//       if(sum > profit){
//         profit = sum;
//       }
//     }
//   }
//   return profit;
// };

//better approach - O(n)
var maxProfit = function(prices){
  let min = prices[0];
  let max = prices[0];
  for(let i=1;i<prices.length;i++){
    if(min >= prices[i]){
      min = prices[i];
    } 
    if(max <= prices[i]){
      max = prices[i];
    }
}
return max - min;
};

console.log(maxProfit(prices));