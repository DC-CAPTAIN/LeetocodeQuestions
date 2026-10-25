// 232. Implement Queue using Stacks

package EasyQuestions.Queues.ImplementQueueUsingStacks;

import java.util.Stack;

// Approach 1: Using two stacks

public class ImplementQueueUsingStacks {
    private Stack<Integer> s1 = new Stack<>();
    private Stack<Integer> s2 = new Stack<>();

    public void push(int x){
        while(!s1.isEmpty()){
            s2.push(s1.peek());
            s1.pop();
        }

        s1.push(x);

        while(!s2.isEmpty()){
            s1.push(s2.peek());
            s2.pop();
        }
    }

    public int pop(){
        int ans = s1.peek();
        s1.pop();
        return ans;
    }

    public int peek(){
        return s1.peek();
    }

    public boolean empty(){
        return s1.isEmpty();
    }
}

// Approach 2: Using two stacks (Optimized)

class ImplementQueueUsingStacks2 {
    private Stack<Integer> in = new Stack<>();
    private Stack<Integer> out = new Stack<>();

    public void push(int x) {
        in.push(x);
    }

    public int pop() {
        peek(); // Ensures 'out' has the current front element
        return out.pop();
    }

    public int peek() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) {
                out.push(in.pop());
            }
        }
        return out.peek();
    }

    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }
}