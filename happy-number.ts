//https://leetcode.com/problems/happy-number
function isHappy(n: number): boolean {
    function sumsquares(x:number){
        let ans=0;
        while(x>0){
            ans+=Math.pow(x%10,2);
            x=Math.floor(x/10);
        }
        return ans;
    }
    let MyMap=new Map<number,boolean> ();
   
    while(!MyMap.has(sumsquares(n))){
        let x=sumsquares(n);
        MyMap.set(x,true);
        n=x;
    }
    return n==1;
};
