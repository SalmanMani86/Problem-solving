function SumOfUniqueElements(nums) {
    let set=new Set();
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            
            map.set(nums[i],map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }
    console.log(map);
let sum=0
    for(let [key,count] of map){
        if(count<=1){
            sum=sum+key;
        }
    }
    
    return sum;
}
console.log(SumOfUniqueElements([1,2,3,2]));

