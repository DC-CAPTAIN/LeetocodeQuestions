// 435. Non-overlapping Intervals

package MediumQuestions.Intervals.NonOverlappingIntervals;

import java.util.Arrays;

// Approach: Sort the intervals by their end times, then iterate through them and count the number of overlapping intervals. The time complexity is O(n log n) due to sorting, and the space complexity is O(1) since we are using a constant amount of extra space.

public class NonOverlappingInervals {
    public int eraseOverlapIntervals(int[][] intervals){
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

        int count = 0;
        int end = intervals[0][1];

        for(int i = 1; i < intervals.length; i++){
            if(intervals[i][0] < end) count++;

            else end = intervals[i][1];
        }
        return count;
    }
}

// Brute force approach: Compare each interval with every other interval and count the number of overlapping intervals. This approach has a time complexity of O(n^2) and is not efficient for large inputs.

class NonOverlappingIntervalsBruteForce {
    public int eraseOverlapIntervals(int[][] intervals){
        int count = 0;

        for(int i = 0; i < intervals.length; i++){
            for(int j = i + 1; j < intervals.length; j++){
                if(intervals[i][0] < intervals[j][1] && intervals[j][0] < intervals[i][1]) count++;
            }
        }
        return count == 0 ? 0 : count - 1;
    }
}
// will not work for all cases, as it does not take into account the fact that we need to remove the minimum number of intervals to make the rest non-overlapping.
// This is not a valid solution for the problem, as it does not take into account the fact that we need to remove the minimum number of intervals to make the rest non-overlapping. It simply counts the number of overlapping intervals, which is not sufficient to solve the problem.
