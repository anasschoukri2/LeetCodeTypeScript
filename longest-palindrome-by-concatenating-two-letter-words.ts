//https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words
function longestPalindrome(words: string[]): number {
    let ans=0;
    let MyMap=new Map<string,number> ();
    for(let op of words){
        if(MyMap.has(op))
            MyMap.set(op,MyMap.get(op)+1);
        else 
            MyMap.set(op,1);
    }
    let already=false;
    for(let i=0;i<words.length;i++){
       
        if(MyMap.has(words[i].split("").reverse().join(""))&&words[i][0]!=words[i][1]){
            ans+=Math.min(MyMap.get(words[i]),MyMap.get(words[i].split("").reverse().join("")))*2*2;
            MyMap.set(words[i],0);
            MyMap.set(words[i].split("").reverse().join(""),0);
            
        } 
        if(words[i][0]==words[i][1]){
            if(MyMap.get(words[i])%2==1)
                already=true;
            ans+=Math.floor(MyMap.get(words[i])/2)*2*2;
            MyMap.set(words[i],0);
            continue;
        }
        
        
    }
    already?ans+=2:ans+=0;
    return ans;

};
