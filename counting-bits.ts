//https://leetcode.com/problems/counting-bits
function countBits(n: number): number[] {
    let ans:number[]=[];
    for(let i=0;i<=n;i++){
        let count=0;
        let s=i.toString(2);
        for(let j=0;j<s.length;j++){
            if(s[j]=='1'){
                count++;
            }
        }
        ans.push(count);
    }
    return ans;
};
