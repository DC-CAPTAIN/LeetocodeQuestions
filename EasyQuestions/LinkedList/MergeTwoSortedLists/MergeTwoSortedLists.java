// 21. Merge Two Sorted Lists

package EasyQuestions.LinkedList.MergeTwoSortedLists;

import java.util.ArrayList;
import java.util.Collections;

// Approach 1: Iterative Approach (Optimized)

public class MergeTwoSortedLists {
    class ListNode{
        int val;
        ListNode next;

        ListNode(int val){
            this.val = val;
            this.next = null;
        }
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2){
        ListNode dummy = new ListNode(-1);
        ListNode tail = dummy;

        while(list1 != null && list2 != null){
            if(list1.val < list2.val){
                tail.next = list1;
                list1 = list1.next;
            }
            else{
                tail.next = list2;
                list2 = list2.next;
            }

            tail = tail.next;
        }

        tail.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }
}

// Approach 2: Recursive Approach

class mergeTwoSortedListsRecursive {
    class ListNode{
        int val;
        ListNode next;

        ListNode(int val){
            this.val = val;
            this.next = null;
        }
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2){
        if(list1 == null) return list2;
        if(list2 == null) return list1;

        if(list1.val < list2.val){
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }
        else{
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
}

// Approach 3: Brute Force Approach (Using ArrayList)

class mergeTwoSortedListsBruteForce {
    class ListNode{
        int val;
        ListNode next;

        ListNode(int val){
            this.val = val;
            this.next = null;
        }
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2){
        ArrayList<Integer> mergedList = new ArrayList<>();

        while(list1 != null){
            mergedList.add(list1.val);
            list1 = list1.next;
        }

        while(list2 != null){
            mergedList.add(list2.val);
            list2 = list2.next;
        }

        Collections.sort(mergedList);

        ListNode dummy = new ListNode(-1);
        ListNode tail = dummy;

        for(int val : mergedList){
            tail.next = new ListNode(val);
            tail = tail.next;
        }

        return dummy.next;
    }
}