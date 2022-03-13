//https://leetcode.com/problems/check-if-string-is-a-prefix-of-array
function isPrefixString(s: string, words: string[]): boolean {
    let con="";
    for(let i=0;i<words.length;i++){
        con+=words[i];
        if(con.length>=s.length )break;
    }
    return con==s;
};
