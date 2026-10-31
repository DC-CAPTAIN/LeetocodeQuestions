class FindFirstLastPosition {
    public int[] searchRange(int[] nums, int target){
        int first = findBound(true, nums, target);
        int last = findBound(false, nums, target);

        return first == -1 ? new int[]{-1, -1} : new int[]{first, last};
    }

    public int findBound(boolean isFirst, int[] nums, int target){
        int left = 0;
        int right = nums.length - 1;
        int bound = -1;

        while(left <= right){
            int mid = left + (right - left) / 2;

            if(nums[mid] == target){
                bound = mid;
                if(isFirst) right = mid - 1;
                else left = mid + 1;
            }
            else if(nums[mid] < target) left = mid + 1;
            else right = mid - 1; 
        }
        return bound;
    }
}
