var subarraySumEqualsK = function(nums, k){
    let map = new Map();

    map.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for(let num of nums){
        prefixSum += num;

        let required = prefixSum - k;

        if(map.has(required)) count += map.get(required);

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}