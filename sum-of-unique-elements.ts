//https://leetcode.com/problems/sum-of-unique-elements
function sumOfUnique(nums: number[]): number {
    nums.sort((a:number , b: number)=>{return  a-b;});
    console.log(nums);
    let ans=0;
    for(let i=0;i<nums.length;){
        let op=0;
        let f=nums[i];
        while(i<nums.length&&nums[i]==f){
            op++;
            i++;
        }
        
        if(op==1){ans+=f;}
        else{
            
            console.log(nums[i-1]);
        }
    }
    return ans ; 
    
};
