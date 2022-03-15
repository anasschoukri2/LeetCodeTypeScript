//https://leetcode.com/problems/ransom-note
function canConstruct(ransomNote: string, magazine: string): boolean {
     let myMap=new Map<string, number>();
    for(let i=0;i<26;i++){
        myMap.set(String.fromCharCode("a".charCodeAt(0)+i),0);
    }
    for(let o of magazine){
        myMap.set(o,myMap.get(o)+1);
    }
    for(let o of ransomNote){
        if(myMap.get(o)<=0){
            return false;
        }
        myMap.set(o,myMap.get(o)-1);
        
    }
    return true;
};
