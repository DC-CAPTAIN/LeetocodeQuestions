package EasyQuestions.TwoPointers.ValidPalindrome;

// 125. Valid Palindrome

// Approach 1

public class ValidPalindrome {
    public boolean isPalindrome(String s){
        int left = 0;
        int right = s.length() - 1;

        while(left < right){
            while(left < right && !Character.isLetterOrDigit(left)) left++;
            while(left < right && !Character.isLetterOrDigit(right)) right--;

            if(Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) return false;

            left++;
            right--;
        }
        return true;
    }
}

// Approach 2

class ValidPalindrome2 {
    public boolean isPalindrome(String s){
        s = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        String forward = "";
        String backward = "";

        for(int i = 0; i < s.length(); i++){
            forward += s.charAt(i);
        }

        for(int i = s.length() - 1; i >= 0; i--){
            backward += s.charAt(i);
        }

        return forward.equals(backward);
    }
}