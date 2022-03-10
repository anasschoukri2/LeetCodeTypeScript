//https://leetcode.com/problems/sort-array-by-increasing-frequency
function frequencySort(nums: number[]): number[] {
        let MyMap=new Map<number,number> ();
        for(let i=0;i<nums.length;i++){
            if(MyMap.has(nums[i])){
                MyMap.set(nums[i],MyMap.get(nums[i])+1);
            }
            else{
                 MyMap.set(nums[i],1);
            }
        }
        let pairs:[number,number][];
        pairs=[];
        for(let e of MyMap.entries()){
            pairs.push([e[0],e[1]]);
        }
        pairs.reverse;
        function comp(a:[number,number],b:[number,number]):number{
            if(a[1]<b[1])return -1;
            else {
                if(a[1]===b[1]){
                    return b[0]-a[0];
                }
                return 0;
            }
        }
        pairs.sort(comp);
        let answer=[];
        for(let e of pairs){
            for(let i=0;i<e[1];i++){
                answer.push(e[0]);
            }
            
        }
    return answer;
};
