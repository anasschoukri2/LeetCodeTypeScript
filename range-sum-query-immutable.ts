//https://leetcode.com/problems/range-sum-query-immutable
class NumArray {
    nums:number[];
    constructor(nums: number[]) {
        this.nums=nums;
        for(let i=1;i<nums.length;i++){
            this.nums[i]=this.nums[i-1]+nums[i];
        }
    }
    sumRange(left: number, right: number): number {
            if(left>0)
                return this.nums[right]-this.nums[left-1];
            else return this.nums[right];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
