// 206. Reverse Linked List

package EasyQuestions.LinkedList.ReverseLinkedList;

public class ReverseLinkedList {
     class ListNode{
        int val;
        ListNode next;
        ListNode(int val){
            this.val = val;
            this.next = null;
        }
     }

    public ListNode reverseList(ListNode head){
        ListNode prev = null;
        ListNode next = null;
        ListNode current = head;

        while(current != null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}
