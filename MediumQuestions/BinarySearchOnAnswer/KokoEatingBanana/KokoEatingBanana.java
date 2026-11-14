// 875. Koko Eating Bananas

package MediumQuestions.BinarySearchOnAnswer.KokoEatingBanana;

public class KokoEatingBanana {
    public int minEatingSpeed(int[] piles, int h){
        int left = 1;
        int right = 0;

        for(int pile : piles){
            right = Math.max(right, pile);
        }

        while(left < right){
            int mid = left + (right - left) / 2;

            if(canEat(piles, h, mid)) right = mid;

            else left = mid + 1;
        }
        return left;
    }

    private  boolean canEat(int[] piles, int h, int speed){
        int hours = 0;

        for(int pile : piles){
            hours += (pile + speed - 1) / speed;
        }

        return hours <= h;
    }
}
