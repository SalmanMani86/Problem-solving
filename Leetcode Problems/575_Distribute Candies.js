function distributeCandies(candyType){
    set=new Set();
    let counter=0;
    for(let i=0;i<candyType.length;i++){
        set.add(candyType[i]);

    }
    return set.size;
}

console.log(distributeCandies([1,1,2,2,3,3]));