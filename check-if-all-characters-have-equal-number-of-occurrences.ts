//https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences
function areOccurrencesEqual(s: string): boolean {
    let M=new Map<string,number>();
    for(let i=0;i<26;i++){
        M.set(String.fromCharCode('a'.charCodeAt(0)+i),0);
    }
    for(let a of s){
        M.set(a,M.get(a)+1);
    }
    let g=-1;
    for(let i=0;i<26;i++){
        if(M.get(String.fromCharCode('a'.charCodeAt(0)+i))!=0){
            if(g==-1){
                g=M.get(String.fromCharCode('a'.charCodeAt(0)+i));
            }
            else if(g!=M.get(String.fromCharCode('a'.charCodeAt(0)+i)))
                return false;
        }
        
    }
    return true;
    
};
