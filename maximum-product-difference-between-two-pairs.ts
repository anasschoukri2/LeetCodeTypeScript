//https://leetcode.com/problems/maximum-product-difference-between-two-pairs
function maxProductDifference(nums: number[]): number {
    nums=nums.sort((a:number,b:number)=>{return a-b});
    return -(nums[0]*nums[1]-nums[nums.length-1]*nums[nums.length-2]);
};
