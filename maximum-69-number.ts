//https://leetcode.com/problems/maximum-69-number
function maximum69Number (num: number): number {
    let y=num.toString().split("");
    for(let i=0;i<y.length;i++){
        if(y[i]=='6'){
            y[i]='9';
            break;
        }
    }
    return +(y.join(""));
};
