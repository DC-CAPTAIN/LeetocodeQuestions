// 75. Sort Colors

var sortColors = function(nums) {
    let i = 0, j = 0, k = nums.length - 1;
    
    while(i <= k){
        if(nums[i] == 0) swap(nums, i++, j++);
        else if(nums[i] == 2) swap(nums, i, k--);
        else i++;
    }
};

var swap = function(nums, i, j){
        let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};
 