//https://leetcode.com/problems/maximum-number-of-words-found-in-sentences
function mostWordsFound(sentences: string[]): number {
    let ans=0;
    for(let o of sentences){
        ans=Math.max(ans,o.split(" ").length);
        
    }
    return ans;
};
