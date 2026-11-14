/**
 * Leetcode - Hard
 * 
 * Problem 4: Median of Two Sorted Arrays
 * 
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

// Approach 1: Binary Search on Answer

var findMedianSortedArrays = function(nums1, nums2) {
    // Always binary search on the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {
        const cut1 = Math.floor(left + (right - left) / 2);
        const cut2 = Math.floor((m + n + 1) / 2 - cut1);

        const left1 = (cut1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[cut1 - 1];
        const right1 = (cut1 === m) ? Number.MAX_SAFE_INTEGER : nums1[cut1];

        const left2 = (cut2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[cut2 - 1];
        const right2 = (cut2 === n) ? Number.MAX_SAFE_INTEGER : nums2[cut2];

        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 === 1) {
                return Math.max(left1, left2);
            }
            return ((Math.max(left1, left2) + Math.min(right1, right2)) / 2.0);
        }

        if (left1 > right2) {
            right = cut1 - 1;
        } else {
            left = cut1 + 1;
        }
    }

    return 0.0;
}

// Approach 2: Merge and Find Median

var findMedianSortedArrays = function(nums1, nums2) {
    let merge = nums1.concat(nums2).sort((a, b) => a - b)
    let n = merge.length;

    if(n % 2 === 0){
        return (merge[n/2 - 1] + merge[n/2])/2;
    }
    return merge[Math.floor(n/2)];
};