// 205. Isomorphic Strings

import java.util.HashMap;

public class IsomorphicStrings {
    public boolean isomorphicStrings(String s, String t) {
        if (s == null || t == null || s.length() != t.length()) return false;

        HashMap<Character, Character> hm = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char a = s.charAt(i);
            char b = t.charAt(i);

            if (hm.containsKey(a)) {
                if (hm.get(a) != b) return false;
            } else {
                if (hm.containsValue(b)) return false;
                hm.put(a, b);
            }
        }
        return true;
    }
}