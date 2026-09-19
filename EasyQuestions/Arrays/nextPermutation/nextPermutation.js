var nextPermutation = function(nums){
    let i = nums.length - 2;

    while(i >= 0 && nums[i] >= nums[i + 1]) i--;

    if(i >= 0){
        let j = nums.length - 1;

        while(nums[j] <= nums[i]) j--;

        swap(nums, i, j);
    }
    reverse(nums, i + 1);
}

var swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var reverse = function(nums, start){
    let end = nums.length - 1;

    while(start < end){
        swap(nums, start, end);
        start++;
        end--;
    }
}