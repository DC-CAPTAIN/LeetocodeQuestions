// 1011. Capacity To Ship Packages Within D Days

package MediumQuestions.BinarySearchOnAnswer.CapacityToShipWithinDDays;

public class CapacityToShip {
    private boolean canShip(int[] weights, int days, int capacity) {
        int count = 1;
        int current = 0;

        for (int weight : weights) {
            if (current + weight > capacity) {
                count++;
                current = 0;
            }

            current += weight;
        }

        return count <= days;
    }

    public int shipWithinDays(int[] weights, int days) {
        int left = 0;
        int right = 0;

        for (int weight : weights) {
            left = Math.max(left, weight);
            right += weight;
        }

        int result = right;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (canShip(weights, days, mid)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}
