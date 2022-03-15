//https://leetcode.com/problems/isomorphic-strings
function isIsomorphic(s: string, t: string): boolean {
    if(s.length!=t.length)return false;
    let myMap=new Map<string,string>();
    let myMap1=new Map<string,string>();
    for(let i=0;i<s.length;i++){
        let a=s[i];
        let b=t[i];
        if(myMap.has(a)&&myMap1.has(b)){
            if(myMap.get(a)!=b||myMap1.get(b)!=a){
                return false;
            }
            
        }
        else if(myMap.has(a)||myMap1.has(b)){
            return false;
        }
        else{
            myMap.set(a,b);
             myMap1.set(b,a);
            
        }
    }
    return true;
};
