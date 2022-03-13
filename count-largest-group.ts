//https://leetcode.com/problems/count-largest-group
function countLargestGroup(n: number): number {
    function sum(x:number):number{
        let ans=0;
        while(x){
            ans+=x%10;
            x=Math.floor(x/10);
        }
        return ans;
    }
    let MyMap=new Map<number,number>();
    let maxi=0;
    let ans=0;
    for(let i=1;i<=n;i++){
        if(MyMap.has(sum(i)))
            MyMap.set(sum(i),MyMap.get(sum(i))+1);
        else
            MyMap.set(sum(i),1);
        console.log(MyMap.get(sum(i)));
        if(MyMap.get(sum(i))>=maxi){
            if(MyMap.get(sum(i))>maxi)ans=0;
            maxi=MyMap.get(sum(i));
            ans++;
        }
    }
    return ans;
};
