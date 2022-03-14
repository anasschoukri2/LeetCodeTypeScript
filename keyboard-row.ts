//https://leetcode.com/problems/keyboard-row
function findWords(words: string[]): string[] {
        let MyMap= new Map<string,number> (); 
        for(let i=0;i<"qwertyuiop".length;i++){
            MyMap.set("qwertyuiop"[i],1);
            MyMap.set("qwertyuiop"[i].toUpperCase(),1);
        }
        for(let i=0;i<"asdfghjkl".length;i++){
            MyMap.set("asdfghjkl"[i],2);
            MyMap.set("asdfghjkl"[i].toUpperCase(),2);
        }
        for(let i=0;i<"zxcvbnm".length;i++){
            MyMap.set("zxcvbnm"[i],3);
            MyMap.set("zxcvbnm"[i].toUpperCase(),3);
        }
        function samerow(s:string):boolean{
            let P= new Map<number,boolean> (); 
            for(let a of s){
                console.log(a+" "+MyMap.get(a));
                P.set(MyMap.get(a),true);
            }
            
            if(P.size>1)return false;
            else return true;
        }
        let ans:string[]=[];
        for(let w of words){
            if(samerow(w)){
                ans.push(w);
            }
        }
        return ans;
};
