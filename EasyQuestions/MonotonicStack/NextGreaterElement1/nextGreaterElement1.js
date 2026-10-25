// 496. Next Greater Element I
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = new Map();

    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    const result = [];

    for (const num of nums1) {
        result.push(map.has(num) ? map.get(num) : -1);
    }

    return result;
};
