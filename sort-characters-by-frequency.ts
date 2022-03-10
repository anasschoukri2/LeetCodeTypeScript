//https://leetcode.com/problems/sort-characters-by-frequency/
function frequencySort(s: string): string {
    let MyMap = new Map<string,number>();
    
    for(let o of s){
        if(!MyMap.has(o)) MyMap.set(o,0);
        MyMap.set(o,MyMap.get(o)+1);
    }
    console.log(MyMap);
    return s.split("").sort((a:string,b:string):number=>{if(MyMap.get(b)==MyMap.get(a))return a.charCodeAt(0)-b.charCodeAt(0) ;return MyMap.get(b)-MyMap.get(a);}).join("");
};
