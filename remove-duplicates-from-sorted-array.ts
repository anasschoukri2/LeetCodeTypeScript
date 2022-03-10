//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
    if(nums.length===0)return 0;
    let i=1,j=1;
    while(i<nums.length){
        if(nums[i]===nums[i-1]){
            i++;
            continue;
        }
        nums[j]=nums[i];
        j++;
        i++;
    }
    return j; 
};
