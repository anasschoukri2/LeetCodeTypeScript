//https://leetcode.com/problems/remove-element/
function removeElement(nums: number[], val: number): number {
    let i=0,j=0;
    while(i<nums.length){
        if(nums[i]!=val){
            nums[j]=nums[i];
            j++;
        }
        i++;
    }
    return j;
};
