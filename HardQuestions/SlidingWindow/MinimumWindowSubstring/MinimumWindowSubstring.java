package HardQuestions.SlidingWindow.MinimumWindowSubstring;

public class MinimumWindowSubstring {
    public String minWindow(String s, String t){
        if(s.length() < t.length()) return "";

        int[] freq = new int[128];

        for(char c : t.toCharArray()) freq[c]++;

        int left = 0;
        int start = 0;
        int minLength = Integer.MAX_VALUE;
        int required = t.length();
        
        for(int right = 0; right < s.length(); right++){
            char c = s.charAt(right);

            if(freq[c] > 0) required--;

            freq[c]--;

            while(required == 0){
                int windowLength = right - left + 1;

                if(windowLength < minLength){
                    minLength = windowLength;
                    start = left;
                }

                char leftChar = s.charAt(left);
                freq[leftChar]++;

                if(freq[leftChar] > 0) required++;
                left++;
            }
        }

        return minLength == Integer.MAX_VALUE ? "" : s.substring(start, start + minLength);
    }
}
