//https://leetcode.com/problems/reverse-words-in-a-string-iii
function reverseWords(s: string): string {
    let y=s.split(" ");
    for(let i=0;i<y.length;i++){
        y[i]=y[i].split("").reverse().join("");
    }
    return y.join(" "); 
};
