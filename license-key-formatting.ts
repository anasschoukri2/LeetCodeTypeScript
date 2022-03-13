//https://leetcode.com/problems/license-key-formatting
function licenseKeyFormatting(s: string, k: number): string {
    let y=s.split("-").reverse();
    let ans="";
    let kk=0;
    let temp="";
    for(let i=0;i<y.length;i++){
        y[i]=y[i].split("").reverse().join("");
        
        for(let j=0;j<y[i].length;j++){
            if(temp.length==k){
                
                ans+=temp+'-';
                temp="";
            }
            kk++;
            temp+=y[i][j].toUpperCase();
        }
    }
    ans+=temp;
    ans=ans.split("").reverse().join("");
    return ans;
};
