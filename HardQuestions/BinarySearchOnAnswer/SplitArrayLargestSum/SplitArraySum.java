// 410. Split Array Largest Sum

package HardQuestions.BinarySearchOnAnswer.SplitArrayLargestSum;

public class SplitArraySum {
    public int splitArray(int[] nums, int k){
        int left = 0;
        int right = 0;

        for(int num : nums){
            left = Math.max(num, left);
            right += num;
        }

        while(left < right){
            int mid = left + (right - left) / 2;

            if(canAllocate(nums, k, mid)) right = mid;

            else left = mid + 1;
        }
        return left;
    }

    // Helper function to check if we can allocate the array into k subarrays with max sum <= maxPages
    // Used Book Allocation Problem Technique to check if we can allocate the array into k subarrays with max sum <= maxPages

    private boolean canAllocate(int[] nums, int k, int maxPages){
        int students = 1;
        int pages = 0;

        for(int num : nums){
            if(pages + num > maxPages){
                students++;
                pages = num;

                if(students > k) return false;
            }

            else pages += num;
        }
        return true;
    }
}
