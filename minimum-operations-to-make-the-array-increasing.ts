//https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
function minOperations(nums: number[]): number {
    let ans=0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]<=nums[i-1]){
            console.log(nums[i-1]+" "+nums[i])
            ans+=(nums[i-1]-nums[i]+1);
            nums[i]=nums[i-1]+1;
        }
        
    }
    for(let i=0;i<nums.length;i++){
        console.log(nums[i])
    }
    return ans;
};
