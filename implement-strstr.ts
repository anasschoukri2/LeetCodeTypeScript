//https://leetcode.com/problems/implement-strstr/
function strStr(haystack: string, needle: string): number {
        if(needle=='')return 0;
        for(let i=0;i<haystack.length;i++){
            let j=0;
            let k=i;
            if(haystack.length-i+1<needle.length)return -1;
            for(;j<needle.length;j++){
                if(haystack[k]==needle[j]){
                    k++;
                    continue;
                }
                else break;
            }
            if(j==needle.length){
                return i;
            }
        }
    return -1;
};
