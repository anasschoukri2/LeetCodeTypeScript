//https://leetcode.com/problems/intersection-of-two-arrays/
function intersection(nums1: number[], nums2: number[]): number[] {
    function comp(a:number,b:number){
        return a-b;
    }
    nums1.sort(comp);
    nums2.sort(comp);
    let i=0,j=0;
    let answer:number[]=[];
    while(i<nums1.length&&j<nums2.length){
        if(nums1[i]===nums2[j]){
            if(answer===[]||answer[answer.length-1]!=nums1[i])
            answer.push(nums1[i]);
            i++,j++;
        }else if(nums1[i]<nums2[j])i++;
        else j++;
    }
    return answer;
};
