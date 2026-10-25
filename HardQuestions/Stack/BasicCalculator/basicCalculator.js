
var calculate = function(s) {
    const stack = [];
    let result = 0;
    let number = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            number = number * 10 + Number(ch);
        } 
        else if (ch === '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } 
        else if (ch === '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } 
        else if (ch === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } 
        else if (ch === ')') {
            result += sign * number;
            number = 0;

            result *= stack.pop();
            result += stack.pop();
        }
    }

    result += sign * number;
    return result;
};
