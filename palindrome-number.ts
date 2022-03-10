//https://leetcode.com/problems/palindrome-number/submissions/
function isPalindrome(x: number): boolean {
        let temp=0;
        let temp2=x;
        while(x>0){
            temp*=10;
            temp+=(x%10);
            x=~~(x/10);
        }
    console.log(temp+" "+temp2);
        return temp==temp2;
};
