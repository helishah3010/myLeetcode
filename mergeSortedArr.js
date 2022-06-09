let nums1 = [0, 10, 20, 30];
let nums2 = [2,50,60];
let arr = [];
let i=0;
let j=0;
while(i<nums1.length || j<nums2.length){
  if(nums1[i]<=nums2[j]){
    arr.push(nums1[i]);
    i++;
  } else {
    arr.push(nums2[j]);
    j++;
  }
}
console.log(arr);