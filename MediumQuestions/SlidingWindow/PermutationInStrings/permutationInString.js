var permutationInString = function(s1, s2){
    if(s1.length > s2.length) return false;

    let count = new Array(26).fill(0);

    for(let i = 0; i < s1.length; i++){
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }

    const isZero = () => count.every(num => value === 0);

    if(isZero()) return true;

    for(let i = s1.length; i < s2.length; i++){
        count[s2.charCodeAt(i) - 97]--;
        count[s2.charCodeAt(i - s1.length) - 97]++;

        if(isZero()) return true;
    }
    return false;
}