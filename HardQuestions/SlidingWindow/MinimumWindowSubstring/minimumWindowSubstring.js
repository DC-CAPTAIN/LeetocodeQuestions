var minWindow = function(s, t){
    if(t.length > s.length) return "";

    let freq = new Array(128).fill(0);

    for(let c of t) freq[c.charCodeAt(0)]++;

    let left = 0;
    let start = 0;
    let minLength = Infinity;
    let required = t.length;

    for(let right = 0; right < s.length; right++){
        let c = s.charCodeAt(right);

        if(freq[c] > 0) required--;
        freq[c]--;

        while(required === 0){
            let windowLength = right - left + 1;

            if(windowLength < minLength){
                minLength = windowLength;
                start = left;
            }

            let leftChar = s.charCodeAt(left);
            freq[leftChar]++;

            if(freq[leftChar] > 0) required++;

            left++;
        }
    }

    return minLength === Infinity ? "" : s.substring(start, start + minLength);
}