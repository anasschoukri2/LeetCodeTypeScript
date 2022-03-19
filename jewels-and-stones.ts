//https://leetcode.com/problems/jewels-and-stones
function numJewelsInStones(jewels: string, stones: string): number {
    let MyMap= new Map<string,boolean>();
    for(let i of jewels){
        MyMap.set(i,true);
    }
    let ans=0;
    for(let i of stones){
        if(MyMap.has(i)){
            ans++;
        }
    }
    return ans;
};
