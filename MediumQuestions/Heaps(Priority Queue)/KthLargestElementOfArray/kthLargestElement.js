// 215. Kth Largest Element in an Array

// Algorithm: Min Heap (Priority Queue) Approach

var kthLargestElement = function(nums, k){

    let heap = [];

    function insert(num){
        heap.push(num);

        let i = heap.length - 1;

        while(i > 0){
            let parent = Math.floor((i - 1) / 2);

            if(heap[parent] <= heap[i]) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];

            i = parent;
        }
    }

    function removeMin(){
        let min = heap[0];
        let last = heap.pop();

        if(heap.length === 0) return min;

        heap[0] = last;

        let i = 0;

        while(true){
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let minIndex = i;

            if(left < heap.length && heap[left] < heap[smallest]) smallest = left;

            if(right < heap.length && heap[right] < heap[smallest]) smallest = right;

            if(smallest === i) break;

            [heap[i], heap[smallest]] = heap[smallest], heap[i];

            i = smallest;
        }
        return min;
    }

    for(let num of nums){
        insert(num);

        if(heap.length > k) removeMin();

    }
    return heap[0];
};