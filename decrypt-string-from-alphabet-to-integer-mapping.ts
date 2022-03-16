//https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping
function freqAlphabets(s: string): string {
          let ans="";
         for(let i=s.length-1; i>=0;i--){
             if(s[i]=='#'){
                 let num:number=+(s[i-2]+s[i-1]);
                 console.log(num);
                 ans=String.fromCharCode("a".charCodeAt(0)+num-1)+ans;
                 i=i-2;
             }
             else{
                 let num:number=+(s[i]);
                 ans=String.fromCharCode("a".charCodeAt(0)+num-1)+ans;
             }
         }
    return ans; 
};
