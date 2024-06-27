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

