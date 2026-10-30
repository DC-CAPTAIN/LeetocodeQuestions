// 2. Add Two Numbers

var ListNode = function(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
};

var addTwoNumbers = function(l1, l2){
    const dummy = new ListNode(-1);
    let current = dummy;
    let carry = 0;

    while(l1 != null || l2 != null || carry > 0){
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    return dummy.next;
}