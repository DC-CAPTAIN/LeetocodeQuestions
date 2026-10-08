import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {

        Arrays.sort(nums);

        HashSet<List<Integer>> arr = new HashSet<>();

        for (int i = 0; i < nums.length; i++) {

            int j = i + 1;
            int k = nums.length - 1;

            while (j < k) {

                int sum = nums[i] + nums[j] + nums[k];

                if (sum > 0) {
                    k--;
                }
                else if (sum < 0) {
                    j++;
                }
                else {
                    ArrayList<Integer> temp = new ArrayList<>();

                    temp.add(nums[i]);
                    temp.add(nums[j]);
                    temp.add(nums[k]);

                    arr.add(temp);

                    j++;
                    k--;
                }
            }
        }

        return new ArrayList<>(arr);
    }
}