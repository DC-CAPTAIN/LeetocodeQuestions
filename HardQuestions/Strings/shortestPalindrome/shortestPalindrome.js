var shortestPalindrome = function(s){
    let rev = s.split('').reverse().join('');

    let combined = s + '#' + rev;

    let lps = new Array(combined.length).fill(0);

    let i = 1; 
    let j = 0;

    while(i < combined.length){
        if(combined[i] === combined[j]){
            lps[i] = j + 1;
            i++;
            j++;
        }
        else if(j > 0){
            j = lps[j - 1];
        }
        else{
            lps[i] = 0;
            i++;
        }
    }
    let palindromeLength = lps[lps.length - 1];

    let remaining = s.substring(palindromeLength);

    let remainingReverse = remaining.split('').reverse().join('');

    return remainingReverse + s;
}