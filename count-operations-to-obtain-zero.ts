//https://leetcode.com/problems/count-operations-to-obtain-zero
function countOperations(nums1: number, nums2: number): number {
    let ans=0;
    while(nums1!=0&&nums2!=0){
        if(nums1>=nums2){
            nums1-=nums2;
        }
        else 
            nums2-=nums1;
        ans++;
            
    }
    return ans;
};
