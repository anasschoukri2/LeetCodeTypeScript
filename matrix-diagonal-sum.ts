//https://leetcode.com/problems/matrix-diagonal-sum
function diagonalSum(mat: number[][]): number {
    let sum=0;
    let n=mat.length;
    for(let i=0;i<n;i++){
        sum+=mat[i][i];
        sum+=mat[i][n-i-1];
    }
    if(n%2==1){
        sum-=mat[Math.floor(n/2)][Math.floor(n/2)];
    }
    return sum;
};
