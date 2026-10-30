// 142. Linked List Cycle II

package MediumQuestions.LinkedList.LinkedListCycleII;

public class LinkedListCycle2 {
    class ListNode{
        int val;
        ListNode next;

        ListNode(int val){
            this.val = val;
            this.next = null;
        }

        public ListNode detectCycle(ListNode head){
            if(head == null || head.next == null) return null;

            ListNode slow = head;
            ListNode fast = head;

            while(fast != null && fast.next != null){
                slow = slow.next;
                fast = fast.next.next;

                if(slow == fast){
                    ListNode ptr = head;

                    while(ptr != slow){
                        ptr = ptr.next;
                        slow = slow.next;
                    }
                    return ptr;
                }
            }
            return null;
        }
    }
}
