//https://leetcode.com/problems/find-the-town-judge
function findJudge(n: number, trust: number[][]): number {
        let MyMap= new Map<number,number> ();
         let MyMap1= new Map<number,number> ();
        for(let i=1;i<=n;i++){
            MyMap.set(i,0);
            MyMap1.set(i,0);
        }
        for(let a of trust){
            MyMap.set(a[1],MyMap.get(a[1])+1);
            MyMap1.set(a[0],MyMap.get(a[0])+1);
        }
        
        let ans=-1;
        for(let i=1;i<=n;i++){
            if(MyMap.get(i)==n-1&&MyMap1.get(i)==0){
                ans=i;
            }
        }
        return ans ; 
};
