// 85. Maximal Rectangle

var maximalRectangle = function(matrix){
    if(matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(matrix[i][j] === '1') heights[j]++;

            else heights[j] = 0;
        }
        maxArea = Math.max(maxArea, largestRectangle(heigths));
    }
    return maxArea;
};

function largestRectangle(heights){
    const stack = [];
    let maxArea = 0;
    const n = heights.length;

    for(let i = 0; i <= n; i++){
        const currentHeight = (i == n) ? 0 : heights[i];

        while(stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]){
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}