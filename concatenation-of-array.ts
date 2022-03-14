//https://leetcode.com/problems/concatenation-of-array
function getConcatenation(nums: number[]): number[] {
        let ans:number[]=nums;
        let n=nums.length;
        for(let i=0;i<n;i++){
            //console.log(nums[i]);
            ans.push(nums[i]);
        }
        return ans; 
};
