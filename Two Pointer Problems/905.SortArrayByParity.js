function sortArray(nums){
    let rightPointer=nums.length-1;
    let leftPointer=0;
    while(leftPointer<rightPointer){
        if(nums[rightPointer]%2===0 && nums[leftPointer]%2!=0){
            let temp=nums[leftPointer];
            nums[leftPointer]=nums[rightPointer];
            nums[rightPointer]=temp;
        }
        if(nums[rightPointer]%2==0 && nums[leftPointer]%2==0){
            leftPointer++;
        } 
        else if(nums[leftPointer]%2!=0 && nums[rightPointer]%2!=0){
            rightPointer--;
        }
        else{
            leftPointer++;
            rightPointer--;
        }
        

    }
    return nums;
}
console.log(sortArray([1,0,3]));