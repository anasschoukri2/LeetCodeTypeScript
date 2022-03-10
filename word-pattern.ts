/*https://leetcode.com/problems/word-pattern/*/
function wordPattern(pattern: string, s: string): boolean {
    let words:string[]=s.split(" ");
    if(words.length!=pattern.length)return false;
    let MyMap=new Map<string,string>();
    let MyMap1=new Map<string,string>();
    for(let i=0;i<pattern.length;i++){
        let p=pattern[i];
        let word=words[i];
        if(MyMap.has(p)&&MyMap1.has(word)){
            if(MyMap.get(p)!=word||MyMap1.get(word)!=p){
                return false;
            }
            continue;
        }
        console.log(p+"**"+word);
        if(MyMap.has(p)||MyMap1.has(word))return false;
        MyMap.set(p,word);
        MyMap1.set(word,p);
        
    }
    return true;
};
