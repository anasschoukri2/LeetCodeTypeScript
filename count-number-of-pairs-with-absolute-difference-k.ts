//https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k
function countKDifference(nums: number[], k: number): number {
        let ans=0;
        let n=nums.length;
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                if(Math.abs(nums[i]-nums[j])==k)ans++;
            }
        }
    return ans;
};
