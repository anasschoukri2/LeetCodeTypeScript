//https://leetcode.com/problems/find-target-indices-after-sorting-array
function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a:number,b:number)=>{return a-b;});
    let ans:number[]=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            ans.push(i);
        }
    }
    return ans;
};
