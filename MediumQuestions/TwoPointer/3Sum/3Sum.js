var threeSum = function(nums) {

    nums.sort((a, b) => a - b);

    let set = new Set();

    for (let i = 0; i < nums.length; i++) {

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {

            let sum = nums[i] + nums[j] + nums[k];

            if (sum > 0) {
                k--;
            }
            else if (sum < 0) {
                j++;
            }
            else {
                let temp = [nums[i], nums[j], nums[k]];

                set.add(JSON.stringify(temp));

                j++;
                k--;
            }
        }
    }

    return Array.from(set).map(item => JSON.parse(item));
};