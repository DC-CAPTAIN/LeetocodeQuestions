// 232. Implement Queue using Stacks

// Approach 1: Using two stacks

class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    a = this.s1;
    b = this.s2;

    push(x) {
        while (a.length > 0) {
            b.push(a.pop());
        }

        a.push(x);

        while (b.length > 0) {
            a.push(b.pop());
        }
    }

    pop() {
        return a.pop();
    }

    peek() {
        return a[a.length - 1];
    }

    empty() {
        return a.length === 0;
    }
}

// Approach 2: Using two stacks (Optimized)

class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    push(x) {
        this.inStack.push(x);
    }

    pop() {
        this.peek(); 
        return this.outStack.pop();
    }

    peek() {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }

    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}