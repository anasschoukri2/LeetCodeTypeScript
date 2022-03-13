//https://leetcode.com/problems/single-number/
function singleNumber(nums: number[]): number {
        let ans=0;
        for(let i of nums){
            ans=ans^i;
        }
        return ans;
};
