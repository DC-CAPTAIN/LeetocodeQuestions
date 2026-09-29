// 28. find the first occurrence of a string in another string

// Approach: Brute Force

var firstOccurenceOfString = function (haystack, needle) {
    if(needle.length === 0) return 0;

    for(let i = 0; i <= haystack.length - needle.length; i++){
        let j = 0;

        while(j < needle.length && haystack[i + j] === needle[j]){
            j++;
        }

        if(j === needle.length) return i;
    }
    return -1;
}

// Approach: buiktin function

var firstOccurenceOfString = function (haystack, needle) {
    return haystack.indexOf(needle);
}