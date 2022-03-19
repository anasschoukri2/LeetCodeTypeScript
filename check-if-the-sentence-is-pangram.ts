//https://leetcode.com/problems/check-if-the-sentence-is-pangram
function checkIfPangram(sentence: string): boolean {
    let M= new Map<string ,boolean>();
    for( let i=0;i<26;i++){
        M.set(String.fromCharCode("a".charCodeAt(0)+i),false);
    }
    for(let a of sentence){
        M.set(a,true);
    }
    for( let i=0;i<26;i++){
        if(M.get(String.fromCharCode("a".charCodeAt(0)+i))==false)return false;
        
    }
    return true;
};
