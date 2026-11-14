// 875. Koko Eating Bananas

var kokoEatingBanana = function(piles, h){
    let left = 1;
    let right = Math.max(...piles);

    function canEat(speed){
        let hours = 0;

        for(let pile of piles){
            hours += Math.ceil(pile / speed);
        }

        return hours <= h;
    }

    while(left < right){
        let mid = Math.floor(left + (right - left) / 2);

        if(canEat(mid)) right = mid;

        else left = mid + 1;
    }

    return left;
}