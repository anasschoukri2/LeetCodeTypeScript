//https://leetcode.com/problems/powx-n
function myPow(x: number, n: number): number {
    if(n<0){
        n*=-1;
        x=1/x;
    }
    if(n==0)return 1;
    let y=myPow(x,Math.floor(n/2));
    if(n%2==0){
        return y*y;
    }
    else return y*y*x;
};
