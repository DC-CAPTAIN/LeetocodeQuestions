// 28. find the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

public class FirstOccurenceOfString {
    public int firstOccurenceOfString(String haystack, String needle) {
        if (needle == null || needle.length() == 0) return 0;
        if (haystack == null) return -1;

        for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            if (haystack.substring(i, i + needle.length()).equals(needle)) {
                return i;
            }
        }
        return -1;
    }
}