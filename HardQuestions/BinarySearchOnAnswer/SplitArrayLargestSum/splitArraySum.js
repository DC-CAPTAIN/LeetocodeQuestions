// 410. Split Array Largest Sum

var splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);

    // Helper function to check if we can allocate the array into k subarrays with max sum <= maxPages
    // Used Book Allocation Problem Technique to check if we can allocate the array into k subarrays with max sum <= maxPages

    function canAllocate(maxPages){
        let students = 1, pages = 0;

        for(const num of nums){
            if(pages + num > maxPages){
                students++;
                pages = 0;
            }
            pages += num;
        }
        return students <= k;   
    }

    while(left < right){
        let mid = left + Math.floor((right - left) / 2);

        if(canAllocate(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}