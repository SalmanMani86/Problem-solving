function backspaceTrack(s,t){
    let slow=0;
    let fast=1;
    let arr1=[];
    let arr2=[];
    for(let i=0;i<s.length;i++){
        if(s[i]!="#"){
            arr1.push(s[i]);
        }
        else{
            arr1.pop();
        }
    }
    console.log("Arr1",arr1);
    fast=1;
    slow=0;

    for(let i=0;i<t.length;i++){
        if(t[i]!="#"){
            arr2.push(t[i]);
        }
        else{
            arr2.pop();
        }
    }
    console.log("Arr2",arr1);
   
    if(arr1.length!=arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
    console.log("Arr2",arr2);
   
    return true;
}
console.log(backspaceTrack("ab#c","ad#c"));