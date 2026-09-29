// 271. Encode and Decode Strings

var encodeDecodeString = function(strs){
    let encodedString = '';
    for(let i = 0; i < strs.length; i++){
        encodedString += strs[i].length + '#';
        encodedString += strs[i];
    }
    return encodedString;
}

var decodedString = function(str){
    let decodedString = [];
    let i = 0;
    while(i < str.length){
        let j = i; 
        while(str[j] !== '#'){
            j++;
        }
        let length = parseInt(str.slice(i, j))
        let word = str.slice(j + 1, j + 1 + length);
        decodedString.push(word);
        i = j + 1 + length;
        j = i;
    }
    return decodedString;
}