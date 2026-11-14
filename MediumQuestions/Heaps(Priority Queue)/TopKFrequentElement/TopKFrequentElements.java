// 347. Top K Frequent Elements

import java.util.HashMap;
import java.util.PriorityQueue;

public class TopKFrequentElements {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> hm = new HashMap<>();

        for(int num : nums){
            hm.put(num, hm.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> hm.get(a) - hm.get(b));

        for(int num : hm.keySet()){
            pq.offer(num);

            if(pq.size() > k) pq.poll();
        }

        int[] result = new int[k];

        for(int i = 0; i < k; i++){
            result[i] = pq.poll();
        }
        return result;
    }
}
