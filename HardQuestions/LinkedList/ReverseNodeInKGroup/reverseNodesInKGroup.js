// 25. Reverse Nodes in k-Group

class ListNode {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

var reverseKGroup = function(head, k){
    if(!head || k <= 1) return head;

    const dummy = new ListNode(0);

    dummy.next = head;
    let prev = dummy;
    let end = dummy;

    while(true){
        let count = 0;

        while(count < k && end !== null){
            end = end.next;
            count++;
        }

        if(end === null) break;

        let start = prev.next;
        let next = end.next;

        end.next = null;

        prev.next = reverseList(start);

        start.next = next;
        prev = start;
        end = prev;
    }
    return dummy.next;
};

function reverseList(head){
    let prev = null;
    let current = head;

    while(current){
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}