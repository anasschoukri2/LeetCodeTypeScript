//https://leetcode.com/problems/third-maximum-number
function thirdMax(nums: number[]): number {
    nums=nums.sort((a:number,b:number)=>{return b-a;});
    let dist=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!=nums[i-1]){
            dist++;
        }
        if(dist==3)return nums[i];
    }
    return nums[0];
};
