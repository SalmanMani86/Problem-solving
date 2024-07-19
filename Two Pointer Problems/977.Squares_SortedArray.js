function squareArray(nums){

    let newArr = nums.map((val) => {
        return val * val;
    }).sort((a,b)=>a-b);
return newArr;
}

function squareArray(nums){
    let s=[...nums];
   let L=0;
   let R=nums.length-1
   let k=nums.length-1;

   while(L<=R){
    if(Math.abs(nums[L])<Math.abs(nums[R])){
        s[k]=nums[R]*nums[R];
        R--;
    }
    else{
        
        s[k]=nums[L]*nums[L];
       
        L++;
        
    }
    k--

   }
   return s;
}

console.log(squareArray([-4,-1,0,3,10]));