//https://leetcode.com/problems/binary-gap
function binaryGap(n: number): number {
    let s=n.toString(2);
    let last=0;
    let ans=0;
    for(let i=1;i<s.length;i++){
        if(s[i]=="1"){
            console.log(last+" "+i)
            ans=Math.max(ans,i-last);
            last=i;
        }
    }
    return ans;
};
