//https://leetcode.com/problems/self-dividing-numbers
function selfDividingNumbers(left: number, right: number): number[] {
    function check(n:number){
        let N=n;
        while(N){
            if(N%10==0)
                return false;
            if(n%(N%10)!=0){
                console.log(n,N%10,n%(N%10));
                return false;
            }
            N=Math.floor(N/10);
        }
        return true;
    }
    let ans:number[]=[];
    for(let i=left;i<=right;i++){
        if(check(i)){
            ans.push(i);
        }
    }
    return ans;
    
};
