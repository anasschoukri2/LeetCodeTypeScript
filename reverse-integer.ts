//https://leetcode.com/problems/reverse-integer/submissions/
function reverse(x: number): number {
    let neg=(x<0);
    if(neg)x*=-1;
    let c=Number(x.toString().split("").reverse().join(""));
    if(neg)c*=-1;
    if(c>2147483648||c<=-2147483648)return 0;
    return c;
};
