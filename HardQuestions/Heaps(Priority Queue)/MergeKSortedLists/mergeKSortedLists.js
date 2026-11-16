// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeKLists = function(lists) {
    let pq = new MinPriorityQueue({
        priority: (node) => node.val
    });

    // Add heads of all non-empty lists
    for (let node of lists) {
        if (node !== null) {
            pq.enqueue(node);
        }
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (pq.size() > 0) {
        let node = pq.dequeue().element;

        current.next = node;
        current = current.next;

        if (node.next !== null) {
            pq.enqueue(node.next);
        }
    }

    return dummy.next;
};