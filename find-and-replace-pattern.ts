//https://leetcode.com/problems/find-and-replace-pattern
function findAndReplacePattern(words: string[], pattern: string): string[] {
        function check(word:string,pattern:string){
            if(word.length!=pattern.length)return false;
            let myMap1=new Map<string,string>();
            let myMap2=new Map<string,string>();
            let a=word.split("");
            let b=pattern.split("");
            for(let i=0;i<word.length;i++){
                let x=word[i];
                if(myMap1.has(x)&&myMap2.has(pattern[i])){
                    if(myMap1.get(x)!=pattern[i]||myMap2.get(pattern[i])!=x){
                        console.log("wtf "+x+" "+myMap1.get(x)+" "+pattern[i]+" "+myMap2.get(pattern[i]));
                        return false;
                    }
                }
                else if(myMap1.has(x)||myMap2.has(pattern[i]))return false;
                else{
                    myMap1.set(x,pattern[i]);
                    myMap2.set(pattern[i],x);
                }
            }
            return true;
        }
        let ans:string[]=[];
        for(let a of words){
            if(check(a,pattern))ans.push(a);
        }
    return ans;
};
