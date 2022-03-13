//https://leetcode.com/problems/defuse-the-bomb
function decrypt(code: number[], k: number): number[] {
    let ans:number[]=[];
    for(let i=0;i<code.length;i++){
            ans[i]=0;
            let j:number;
            k>0? j=i+1:j=i-1;
            while(Math.abs(j-i)<=Math.abs(k)){
                ans[i]+=code[(j+code.length)%code.length];
                k>0? j++:j--;
            }
    }
    return ans;
};
