//https://leetcode.com/problems/final-value-of-variable-after-performing-operations
function finalValueAfterOperations(operations: string[]): number {
        let X=0;
        for(let x of operations){
            let plus=false
            for(let y of x){
                if(y=='+'){
                    plus=true;
                    break;
                }
            }
            plus==true? X++:X--;
        }
        return X;
};
