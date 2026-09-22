// 205. Isomorphic Strings
// Approach: Single HashMap

public class IsomorphicStrings{
    public boolean isomorphicStrings(String s, String t){
        HashMap<Character, Character> hm = new HashMap<>();

        if(s.length() != t.length()) return false;

        for(int i = 0; i < s.length(); i++){
            char a = s.charAt(i);
            char b = t.charAt(i);

            if(hm.containsKey(a)){
                if(hm.get(a).equals(b)) return false;
            }
            else{
                if(hm.containsValue(b)) return false;
                hm.put(a, b);
            }
        }
        return true;
    }
}

// Approach: Two HashMaps

public class IsomorphicStrings{
    public boolean isomorphicStrings(String s, String t){
        HashMap<Character, Character> hm1 = new HashMap<>();
        HashMap<Character, Character> hm2 = new HashMap<>();

        for(int i = 0; i < s.length(); i++){
            char a = s.charAt(i);
            char b = t.charAt(i);

            if(hm1.containsKey(a) && hm1.get(a) != b) return false;
            if(hm2.containsKey(b) && hm2.get(b) != a) return false;
            hm1.put(a, b);
            hm2.put(b, a);
        }
        return true;
    }
}