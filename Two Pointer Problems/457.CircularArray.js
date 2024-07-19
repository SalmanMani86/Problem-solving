function circularArray(nums){
    let slow=0;
    let fast=0;
    let count=0;
    let counter=0;
    let fastTrack=0;
    let jump=0;
    while(slow<nums.length){
     let sequence=nums[slow];
     let seq=false;
      if(sequence>=0){
           seq=true;
        }
        counter=slow;
        fast=slow;
        fastTrack=slow
        while(counter<nums.length){  
            jump=nums[fastTrack];
            if(counter>slow){
                if(fastTrack==fast){
                    console.log("Break Slow");
                    break;
                }
                count=0;
            }
            console.log("Jump",jump);
            if(jump < 0 && seq==true){
                 break;
                }  
            else if (jump > 0 && seq==false){
                 break;
            }
            fastTrack=(fastTrack+jump)%nums.length;
            console.log("Fast Track",fastTrack);
            if(fastTrack==slow && counter>slow){
                console.log("Fast Track Nigative",fastTrack);
                return true;
            }
            if(fastTrack<0){
                 fastTrack=Math.abs((nums.length+fastTrack));
                 console.log("Fast Track Nigative",fastTrack);
            }
            counter++;
            count++;
        }   
        count=0;
        console.log("Outer Loop");
      slow++;  
    }
    return false;
}
console.log(circularArray([1,1]));