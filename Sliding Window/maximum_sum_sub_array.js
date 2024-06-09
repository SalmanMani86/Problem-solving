function maxSubArray(arr,n,k){
    if(n<k){
        return -1;
    }
    let sum=0;
    let maxSum=0;

    for(let i=0;i<k;i++){
        sum+=arr[i];  // For initial window sum like if k=3 then it add three elements 
    }
    maxSum=sum;

    for(let i=k;i<n;i++){
        sum+=arr[i]-arr[i-k]; // add the next item and subtract the previous one
        maxSum=Math.max(sum,maxSum);
    }
    
   return maxSum;

}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
console.log(maxSubArray(arr, n, k));
