//https://leetcode.com/problems/move-zeroes/
function moveZeroes(nums: number[]): void {
    let j=0;
    for(let i=0,zeros=0;i<nums.length;i++){
        if(nums[i]!==0)
            {
            nums[j]=nums[i];
            j++;
        }
    }
    while(j<nums.length){
        nums[j]=0;
        j++;
    }
};
