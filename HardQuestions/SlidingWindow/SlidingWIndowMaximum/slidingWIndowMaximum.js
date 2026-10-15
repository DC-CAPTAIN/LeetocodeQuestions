// 239. Sliding Window Maximum

var slidingWindowMaximum = function(nums, k){
    let deque = [];
    let head = 0;

    let result = new Array(nums.length - k + 1);
    let index = 0;

    for(let right = 0; right < nums.length; right++){
        while(head < deque.length && deque[head] <= right - k){
            head++;
        }

        while(head < deque.length && nums[deque[deque.length - 1]] <= nums[right]){
            deque.pop();
        }

        deque.push(right);

        if(right >= k - 1) result[index++] = nums[deque[head]];
    }
    return result;
}