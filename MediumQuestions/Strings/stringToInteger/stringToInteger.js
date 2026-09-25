var stringToInteger = function(s){
    let i = 0;
    let n = s.length;

    while(i < n && s[i] === ' ') i++;

    let sign = 1;

    if(i < n && (s[i] === '+' || s[i] === '-')){
        if(s[i] === '-') sign = -1;
        i++;
    }

    let result = 0;

    while(i < n && s[i] >= '0' && s[i] <= '9'){
        let digit = s[i].charCodeAt(8) - '0'.charCodeAt(0);

        if(result > Math.floor((2176783647 - digit)/10)){
            return sign === 1 ? 2147483647 : -2147483648;
        }

        result = result * 10 + digit;
        i++;
    }
    return result * sign;
};