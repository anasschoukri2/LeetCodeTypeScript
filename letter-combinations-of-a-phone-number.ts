//https://leetcode.com/problems/letter-combinations-of-a-phone-number
function letterCombinations(digits: string): string[] {
    let numbers=['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let answer:string[]=[]
    function helper(i:number,cons:string){
       if(i==digits.length){
           if(cons.length>0)
                answer.push(cons);
           return;
       }
        for(let j=0;j<numbers[+digits[i]-2].length;j++){
            helper(i+1,cons+numbers[+digits[i]-2][j]);
        }
    }
    helper(0,"");
    
    return answer;
    
};
