//https://leetcode.com/problems/string-matching-in-an-array
function stringMatching(words: string[]): string[] {
    let ans:string[]=[];
    for(let w of words){
        for(let ww of words){
            if(ww!=w){
                if(ww.search(w)!=-1){
                    ans.push(w);
                    break;
                }
            }
        }
    }
    return ans;
};
