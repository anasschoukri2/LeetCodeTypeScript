//https://leetcode.com/problems/replace-all-digits-with-characters
function replaceDigits(s: string): string {
    function shift(a:string,b:number){
        return String.fromCharCode(a.charCodeAt(0)+b);
    }
    let ans='';
    for(let i=0;i<s.length;i+=2){
        let a=s[i];
        let b=-1;
        if(i+1<s.length)
           b=+s[i+1];
        ans+=a;
        if(b!=-1)ans+=shift(a,b);
    }
    return ans;
};
