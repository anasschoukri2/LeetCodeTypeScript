//https://leetcode.com/problems/unique-email-addresses
function numUniqueEmails(emails: string[]): number {
    function parse(email:string):string{
        let ans="";
        let i=0;
        while(i<email.length){
            if(email[i]==='@'||email[i]==='+')break;
            if(email[i]==='.'){
                i++;
                continue;
            }
            ans+=email[i];
            i++;
        }
         while(i<email.length){
            if(email[i]==='@')break;
            i++;
        }
         while(i<email.length){
            ans+=email[i];
            i++;
        }
        return ans;
    }
    let MyMap= new Map<string,boolean>();
    for(let e of emails){
        MyMap.set(parse(e),true);
    }
    return MyMap.size;
};
