//https://leetcode.com/problems/count-the-number-of-consistent-strings
function countConsistentStrings(allowed: string, words: string[]): number {
    let myMap=new Map<string, boolean>();
    for(let a of allowed){
        myMap.set(a,true);
    }
    let ans=0;
    for(let i=0;i<words.length;i++){
        let y=false;
        for(let op of words[i]){
            if(myMap.has(op)==false){
                y=true;
                break;
            }
        }
        if(!y)ans++;
    }
    return ans; 
};
