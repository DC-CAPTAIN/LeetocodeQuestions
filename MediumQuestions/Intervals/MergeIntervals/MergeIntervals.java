// 56. Merge Intervals

package MediumQuestions.Intervals.MergeIntervals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// Optimal solution for merging intervals : Sort the intervals by their start times, then iterate through them and merge overlapping intervals.

public class MergeIntervals {
    public int[][] merge(int[][] intervals){
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> result = new ArrayList<>();

        for(int[] interval : intervals){
            if(result.isEmpty() || result.get(result.size() - 1)[1] < interval[0]) result.add(interval);

            else{
                int[] last = result.get(result.size() - 1);

                last[1] = Math.max(last[1], interval[1]);
            }
        }
        return result.toArray(new int[result.size()][]);
    }
}


// Brute force solution for merging intervals : Compare each interval with every other interval and merge them if they overlap. This approach has a time complexity of O(n^2) and is not efficient for large inputs.

class MergeIntervalsBruteForce {
    public int[][] merge(int[][] intervals){
        List<int[]> result = new ArrayList<>();

        for(int i = 0; i < intervals.length; i++){
            int[] current = intervals[i];
            boolean merged = false;

            for(int j = 0; j < result.size(); j++){
                int[] last = result.get(j);

                if(current[0] <= last[1]){
                    last[1] = Math.max(last[1], current[1]);
                    merged = true;
                    break;
                }
            }

            if(!merged) result.add(current);
        }

        return result.toArray(new int[result.size()][]);
    }
}