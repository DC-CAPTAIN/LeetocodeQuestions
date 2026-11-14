// 1011. Capacity To Ship Packages Within D Days

function canShip(weights, days, capacity){
    let count = 1, current = 0;
    for(const weight of weights){
        if(current + weight > capacity){
            count++;
            current = 0;
        }
        current += weight;
    }
    return count <= days;
}

var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a,b) => a + b, 0);
    let result = right;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(canShip(weights, days, mid)){
            result = mid;
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return result;
};