// 25. Reverse Nodes in k-Group

package HardQuestions.LinkedList.ReverseNodeInKGroup;

public class ReverseNodesInKGroups {
    class ListNode{
        int val;
        ListNode next;

        ListNode(int val){
            this.val = val;
            this.next = null;
        }
    }

    public ListNode reverseKGroup(ListNode head, int k){
        if(head == null || k <= 1) return head;

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        ListNode end = dummy;

        while(true){
            int count = 0;

            while(count < k && end != null){
                end = end.next;
                count++;
            }

            if(end == null) break;

            ListNode start = prev.next;
            ListNode next = end.next;
            
            end.next = null;

            prev.next = reverseList(start);

            start.next = next;

            prev = start;
            end = prev;
        }

        return dummy.next;
    }

    public ListNode reverseList(ListNode head){
        ListNode prev = null;
        ListNode current = head;

        while(current != null){
            ListNode temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        return prev;
    }
}
