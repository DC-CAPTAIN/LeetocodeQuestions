// 347. Top K Frequent Elements

var topKFrequent = function(nums, k) {
    let map = new Map();

    // Count frequencies
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Min heap based on frequency
    let pq = new MinPriorityQueue({
        priority: (element) => element[1]
    });

    for (let [num, freq] of map) {
        pq.enqueue([num, freq]);

        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    let result = [];

    while (pq.size() > 0) {
        result.push(pq.dequeue().element[0]);
    }

    return result;
};