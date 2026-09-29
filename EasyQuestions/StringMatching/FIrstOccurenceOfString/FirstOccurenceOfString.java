// 28. find the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Approach 1: Brute Force

public class FirstOccurenceOfString{
    public int firstOccurenceOfString(String haystack, String needle){
        if(needle.length() == 0) return 0;

        for(int i = 0; i <= haystack.length() - needle.length(); i++){
            int j = 0;
            while(j < needle.length() && haystack.charAt(i + j) == needle.charAt(j)){
                j++;
            }
            if(j == needle.length()) return i;
        }
        return -1;
    }
}

// Approach 2: Using substring

public class FirstOccurenceOfString{
    public int firstOccurenceOfString(String haystack, String needle){
        for(int i = 0; i <= haystack.length() - needle.length(); i++){
            if(haystack.charAt(i) == needle.charAt(0)){
                if(haystack.substring(i, needle.length() + i).equals(needle)) return i;
            }
        }
        return -1;
    }
}

// Approach 3: Using built-in function

public class FirstOccurenceOfString{
    public int firstOccurenceOfString(String haystack, String needle){
        return haystack.indexOf(needle);
    }
}