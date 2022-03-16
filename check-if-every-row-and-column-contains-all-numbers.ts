//https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers
function checkValid(matrix: number[][]): boolean {
    let n=matrix.length;
    let M:number[][]=[];
    for(let i=0;i<n;i++){
        M.push([]);
        for(let j=0;j<n;j++){
            M[i][j]=matrix[i][j];
        }
        
    }
    for(let i=0;i<n;i++){
        matrix[i]=matrix[i].sort((a:number,b:number)=>{return a-b;});
        if(matrix[i][0]!=1)return false;
        for(let j=1;j<n;j++){
            if(matrix[i][j]!=matrix[i][j-1]+1)return false;
        }
    }
    console.log(M);
    for(let i=0;i<n;i++){
        let sum=0;
        for(let j=0;j<n;j++){
            sum+=M[j][i];
        }
        console.log(sum);
        if(sum!=n*(n+1)/2)return false;
    }
    return true;
    
};
