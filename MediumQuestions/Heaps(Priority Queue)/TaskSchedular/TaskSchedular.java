// 621. Task Scheduler

// Appraoch: Using Priority Queue

import java.util.*;

public class TaskSchedular {
    public int leastInterval(char[] tasks, int n) {
        int[] freq = new int[26];

        for (char task : tasks) {
            freq[task - 'A']++;
        }

        PriorityQueue<Integer> pq =
            new PriorityQueue<>(Collections.reverseOrder());

        for (int f : freq) {
            if (f > 0) {
                pq.offer(f);
            }
        }

        int time = 0;

        while (!pq.isEmpty()) {
            List<Integer> temp = new ArrayList<>();
            int cycle = n + 1;
            int executed = 0;

            while (cycle > 0 && !pq.isEmpty()) {
                int current = pq.poll();
                current--;

                if (current > 0) {
                    temp.add(current);
                }

                executed++;
                cycle--;
            }

            for (int f : temp) {
                pq.offer(f);
            }

            time += pq.isEmpty() ? executed : n + 1;
        }

        return time;
    }
}

// Approach: Using Math 

class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] freq = new int[26];

        for (char task : tasks) {
            freq[task - 'A']++;
        }

        Arrays.sort(freq);

        int maxFreq = freq[25];
        int countMax = 0;

        for (int f : freq) {
            if (f == maxFreq) {
                countMax++;
            }
        }

        int intervals = (maxFreq - 1) * (n + 1) + countMax;

        return Math.max(tasks.length, intervals);
    }
}