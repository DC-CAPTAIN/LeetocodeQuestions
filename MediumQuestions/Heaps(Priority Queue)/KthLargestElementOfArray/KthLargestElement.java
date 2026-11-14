// 215. Kth Largest Element in an Array

import java.util.PriorityQueue;
import java.util.Arrays;

// Approach: Use a min-heap (priority queue) to keep track of the k largest elements in the array.
// The time complexity is O(n log k) since we are adding n elements to the heap and maintaining its size to k. The space complexity is O(k) since we are storing k elements in the heap.

public class KthLargestElement {
    public int findKthLargest(int[] nums, int k){
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for(int num : nums){
            pq.add(num);

            if(pq.size() > k) pq.poll();
        }

        return pq.peek();
    }
}

// Brute force approach: Sort the array and return the k-th largest element. This approach has a time complexity of O(n log n) due to sorting, and a space complexity of O(1) if we sort in place.

class KthLargestElementBruteForce {
    public int findKthLargest(int[] nums, int k){
        Arrays.sort(nums);
        return nums[nums.length - k];
    }
}