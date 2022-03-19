//https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array
function maxProduct(nums: number[]): number {
    nums=nums.sort((a:number,b:number)=>{return b-a;});
    return (nums[0]-1)*(nums[1]-1);
};
