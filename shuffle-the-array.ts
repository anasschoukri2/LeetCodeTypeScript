//https://leetcode.com/problems/shuffle-the-array
function shuffle(nums: number[], n: number): number[] {
        let ans:number[]=[];
        for(let i=0;i<n;i++){
            ans.push(nums[i]);
            ans.push(nums[n+i]);
        }
    return ans; 
        
};
