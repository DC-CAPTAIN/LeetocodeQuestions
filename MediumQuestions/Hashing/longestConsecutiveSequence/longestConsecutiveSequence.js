var longestConsecutiveSequence = function(nums){
    let set = new Set(nums);
    let longest = 0;

    for(let num of set){
        if(!set.has(num - 1)){
            let current = num;
            let streak = 1;

            while(set.has(current + 1)){
                current++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest;
}