/*https://leetcode.com/problems/restore-ip-addresses*/
function restoreIpAddresses(s: string): string[] {
    let u=s.split("");
    let ans:string[]=[];
    function  helper(cons:string,i:number,num:number,dots:number):void{
        if(num>255||dots<0)return;
        if(i==s.length){
            if(num<=255&&num>=0&&dots==0){
                cons+="."+num.toString();
                ans.push(cons);
            }
            return;
        }
        if(num<=255&&num>=0){
            if(num!=0){
                let p:number=num*10+(+s[i]);
                helper(cons,i+1,p,dots);
            }
            if(cons!="")cons+="."
            cons+=num.toString();
            helper(cons,i+1,+s[i],dots-1);
        }
        if(num==-1){
            let p:number=(+s[i]);
            helper(cons,i+1,p,dots);
        }return ;
    }
    helper("",0,-1,3);
    return ans;
};
