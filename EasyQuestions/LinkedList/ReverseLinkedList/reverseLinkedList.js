class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var reverseList = function(head){
    let prev = null;
    let current = head;
    let next = null;

    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}