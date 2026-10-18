// 155. Min Stack

var minStack = function(){
    this.stack = [];
    this.minStack = [];

    const s = this.stack;
    const m = this.minStack;

    minStack.prototype.push = function(value){
        s.push(value);

        if(s.length === 0 || value <= m[m.length - 1]) m.push(value);
    }

    minStack.prototype.pop = function(){
        const removed = s.pop();

        if(removed === m[m.length - 1]) m.pop();
    }

    minStack.prototype.top = function(){
        return s[s.length - 1];
    }

    minStack.prototype.getMin = function(){
        return m[m.length - 1];
    }
}


