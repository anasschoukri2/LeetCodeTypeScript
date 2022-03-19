//https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits
function minimumSum(num: number): number {
        let y=num.toString().split("").sort();
        let a=+y[0]*10+(+y[2]);
        let b=+y[1]*10+(+y[3]);
        
        return a+b;
};
