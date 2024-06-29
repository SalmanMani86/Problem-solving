/* 1217. Minimum Cost to Move Chips to The Same Position
Easy
Topics
Companies
Hint
We have n chips, where the position of the ith chip is position[i].

We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

position[i] + 2 or position[i] - 2 with cost = 0.
position[i] + 1 or position[i] - 1 with cost = 1.
Return the minimum cost needed to move all the chips to the same position.

*/

function minCostToMoveChips (position) {
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return Math.min(evenCount, oddCount);
}
console.log(minCostToMoveChips([[2,2,2,2,2,2,2,2,2,2]]));