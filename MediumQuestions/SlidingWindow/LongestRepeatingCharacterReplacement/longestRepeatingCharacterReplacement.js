// 424. Longest Repeating Character Replacement

var longestRepreatingCharacterReplacement = function(s, k){
    let freq = new Array(26).fill(0);

    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
        let index = s.charCodeAt(right) - 65;
        freq[index]++;

        maxFreq = Math.max(maxFreq, freq[index]);

        while(right - left + 1 - maxFreq > k){
            freq[s.charCodeAt(left) - 65]--;
            left++;
        } 
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}