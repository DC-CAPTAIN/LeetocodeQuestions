import java.util.Collections;
import java.util.PriorityQueue;


public class FindMedianFromDataStream {
    PriorityQueue<Integer> left;
        PriorityQueue<Integer> right;

    public FindMedianFromDataStream() {
        left = new PriorityQueue<>(Collections.reverseOrder());

        right = new PriorityQueue<>();
    }
    
    public void addNum(int num) {
        if(left.isEmpty() || num <= left.peek()) left.offer(num);
        else right.offer(num);

        if(left.size() > right.size() + 1) right.offer(left.poll());
        else if(right.size() > left.size()) left.offer(right.poll());
    }
    
    public double findMedian() {
        if(left.size() > right.size()) return left.peek();

        return ((long) left.peek() + right.peek()) / 2.0;
    }
}
