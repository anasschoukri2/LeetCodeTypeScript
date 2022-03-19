//https://leetcode.com/problems/find-greatest-common-divisor-of-array
function findGCD(nums: number[]): number {
    function gcd(a:number, b:number) {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    nums.sort((a:number,b:number)=>{
        return a-b;
    });
    return gcd(nums[0],nums[nums.length-1]);
};
