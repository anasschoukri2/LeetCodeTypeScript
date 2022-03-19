//https://leetcode.com/problems/truncate-sentence
function truncateSentence(s: string, k: number): string {
    let ans:string[]=[];
    let op=s.split(" ");
    for(let i=0;i<k;i++){
        ans.push(op[i]);
    }
    return ans.join(" ");
};
