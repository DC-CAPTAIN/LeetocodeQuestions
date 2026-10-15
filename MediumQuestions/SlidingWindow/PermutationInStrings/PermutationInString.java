// 567. Permutation in String

package MediumQuestions.SlidingWindow.PermutationInStrings;

public class PermutationInString {
    public boolean checkInclusion(String s1, String s2){
        if(s1.length() > s2.length()) return false;

        int[] count = new int[26];

        for(int i = 0; i < s1.length(); i++){
            count[s1.charAt(i) - 'a']++;
            count[s2.charAt(i) - 'a']--;
        }

        if(isZero(count)) return true;

        for(int right = s1.length(); right < s2.length(); right++){
            count[s2.charAt(right) - 'a']--;
            count[s2.charAt(right - s1.length()) - 'a']++;

            if(isZero(count)) return true;
        }
        return false;
    }

    private boolean isZero(int[] count){
        for(int value : count){
            if(value != 0) return false;
        } 
        return true;
    }
}
