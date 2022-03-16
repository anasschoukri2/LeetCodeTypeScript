//https://leetcode.com/problems/power-of-two
function isPowerOfTwo(n: number): boolean {
   
    if(n<=0)return false;
    if(n==1)return true;
    n--;
    let s=n.toString(2);
    for(let i of s){
        if(i=='0')return false;
    }
    return true;

};
