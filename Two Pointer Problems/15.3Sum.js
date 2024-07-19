function sum(nums){
    nums = nums.sort((a, b) => a - b); // Sort the array
    let map = new Map(); // Initialize the map
    
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1; 
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if (sum == 0) {
                let triplet = [nums[i], nums[j], nums[k]];
                map.set(JSON.stringify(triplet), triplet);
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }  
        }
    }
    
    // Convert map keys back to arrays
    let keysArray = Array.from(map.values());
    return keysArray;

}
console.log(sum([-2,0,0,2,2]));