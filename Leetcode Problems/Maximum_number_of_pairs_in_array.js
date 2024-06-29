/* 2341. Maximum Number of Pairs in Array
Solved
Easy
Topics
Companies
Hint
You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

 




https://leetcode.com/problems/maximum-number-of-pairs-in-array/ */
function MaximumNumberofPairsInArray(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    let counter=0;
    let remainingNumbers=0;
    for (let [key, count] of map) {
        counter+=Math.floor(count/2);
        remainingNumbers+=count%2;
        console.log(remainingNumbers);
    }
   return [counter,remainingNumbers];
}
console.log(MaximumNumberofPairsInArray([1,2,3,4,5]));

