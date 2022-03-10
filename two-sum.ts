https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
    let answer: number[];
    let exist = new Map<number, number>();
    for(let i=0;i<nums.length;i++){
        exist.set(nums[i],i);
    }
    for(let i=0;i<nums.length;i++){
       if(i!==exist.get(target-nums[i])&&nums[i]+nums[exist.get(target-nums[i])]===target){
           return [i,exist.get(target-nums[i])];
       }
    }
   
    return [1,1]
};
