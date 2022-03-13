//https://leetcode.com/problems/student-attendance-record-i
function checkRecord(s: string): boolean {
    function late():boolean{
        for(let i=0;i<s.length-2;i++){
            if(s[i]=='L'&&s[i+1]=='L'&&s[i+2]=='L')return true;
        }
        return false;
    }
    function absent():boolean{
         let A=0;
         for(let i=0;i<s.length;i++){
            if(s[i]=='A')A++;
        }
        return A>=2;
    }
    return !absent()&&!late();
};
