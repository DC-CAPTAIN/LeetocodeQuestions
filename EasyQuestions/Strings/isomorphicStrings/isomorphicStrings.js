// 205. Isomorphic Strings

var isomorphicStrings = function(s, t){
    let hm1 = new Map();
    let hm2 = new Map();

    for(let i = 0; i < s.length; i++){
        let a = s[i];
        let b = t[i];

        if(hm1.has(a) && hm1.get(a) !== b) return false;
        if(hm2.has(b) && hm2.get(b) !== a) return false;

        hm1.set(a, b);
        hm2.set(b, a);
    }
    return true;
}