//https://leetcode.com/problems/set-mismatch/
function findErrorNums(nums: number[]): number[] {
    let MyMap= new Map<number, boolean> ();
    let n=nums.length;
    for(let i=1;i<=n;i++){
        MyMap.set(i,false);
    }
    let ans=[];
    for(let a of nums){
        if(MyMap.get(a)==true){
            ans[0]=a;
        }
        MyMap.set(a,true);
    }
    for(let i=1;i<=n;i++){
        if(MyMap.get(i)==false)ans[1]=i;
    }
    return ans;
};
