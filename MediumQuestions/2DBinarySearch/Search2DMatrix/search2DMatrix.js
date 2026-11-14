// 74. Search a 2D Matrix

var searchMatrix = function(matrix, target){
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        let row = Math.floor(mid / n);
        let col = mid % n;

        if(matrix[row][col] === target) return true;

        else if(matrix[row][col] < target) left = mid + 1;

        else right = mid - 1;
    }
    return false;
}