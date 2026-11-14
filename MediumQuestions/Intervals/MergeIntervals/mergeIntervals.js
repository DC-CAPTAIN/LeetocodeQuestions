// 56. Merge Intervals

// Optimized Approach: Sort and Merge

var mergeIntervals = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    // Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];
        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            result.push(currentInterval);
            currentInterval = nextInterval;
        }
    }
    result.push(currentInterval);
    return result;
}

// Brute Force Approach: Compare Each Interval

var mergeIntervalsBruteForce = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    const result = [];
    for (let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i]; 
        let isMerged = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j][1] >= currentInterval[0]) {
                result[j][1] = Math.max(result[j][1], currentInterval[1]);
                isMerged = true;
                break;
            }
        }
        if (!isMerged) {
            result.push(currentInterval);
        }
    }
    return result;
}