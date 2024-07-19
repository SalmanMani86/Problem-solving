function removePalindrome(s){
    let operation=0;
    let arr=[...s];
    let reverseArr=[...s].reverse();
    console.log(arr);
    console.log(reverseArr);
    let L=0,R=s.length-1;
    // for(let i=0;i<s.length;i++){
    //     if(arr[i]!=reverseArr[i]){
    //         operation++;
    //     }
    // }
    while(L<R){
        if(arr[L]!=arr[R]){
            operation++;
           
        }
        L++;
        R--;
        
    }
    // if(R==1){
    //     operation++;
    // }
   

    return operation===0?1:2;
}

console.log(removePalindrome("bbaabaaa"))
