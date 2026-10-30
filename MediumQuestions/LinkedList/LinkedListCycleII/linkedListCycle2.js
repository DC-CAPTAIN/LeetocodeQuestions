// 142. Linked List Cycle II

var linkedListCycle2 = function(head){
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            let ptr = head;

            while(ptr != slow){
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
}