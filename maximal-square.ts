//https://leetcode.com/problems/maximal-square
function maximalSquare(matrix: string[][]): number {
    let prefix:number[][]=[];
    for(let i=0;i<matrix.length;i++){
        prefix[i]=([+matrix[i][0]]);
    }
     for(let i=0;i<matrix[0].length;i++){
        prefix[0][i]=(+matrix[0][i]);
    }
    let ans=0;
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(+matrix[i][j]!=0){
                prefix[i][j]=Math.min(prefix[i-1][j],Math.min(prefix[i][j-1],prefix[i-1][j-1]))+1;
            }
            else prefix[i][j]=0;
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            ans=Math.max(ans,prefix[i][j]);
        }
    }
    console.log(prefix)
    return ans*ans;
};
