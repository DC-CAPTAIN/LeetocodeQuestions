// 75. Sort Colors

// Dutch National Flag Problem

package MediumQuestions.Soting.SortColors;

public class SortColors {
    public void sortColors(int[] nums) {
        int i = 0;
        int j = 0;
        int k = nums.length - 1;

        while(i <= k){
            if(nums[i] == 0) swap(nums, i++, j++);

            else if(nums[i] == 2) swap(nums, i, k--);

            else i++;
        }
    }
    public void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
