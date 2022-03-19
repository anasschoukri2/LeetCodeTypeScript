//https://leetcode.com/problems/richest-customer-wealth/
function maximumWealth(accounts: number[][]): number {
    let ans:number=0;
    for(let a of accounts){
        let sum:number =0;
        for(let b of a){
            sum+=b;
        }
        ans=Math.max(ans,sum);
    }
    return ans;
};
