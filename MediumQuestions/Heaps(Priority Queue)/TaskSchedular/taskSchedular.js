// 621. Task Scheduler
// Approach: Using Priority Queue

var leastInterval = function(tasks, n) {
    let freq = new Array(26).fill(0);

    for (let task of tasks) {
        freq[task.charCodeAt(0) - 65]++;
    }

    // Max heap based on frequency
    let pq = new MaxPriorityQueue({
        priority: (element) => element
    });

    for (let f of freq) {
        if (f > 0) {
            pq.enqueue(f);
        }
    }

    let time = 0;

    while (pq.size() > 0) {
        let temp = [];
        let cycle = n + 1;
        let executed = 0;

        while (cycle > 0 && pq.size() > 0) {
            let current = pq.dequeue().element;
            current--;

            if (current > 0) {
                temp.push(current);
            }

            executed++;
            cycle--;
        }

        for (let f of temp) {
            pq.enqueue(f);
        }

        time += pq.size() > 0 ? n + 1 : executed;
    }

    return time;
};