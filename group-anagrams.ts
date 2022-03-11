//https://leetcode.com/problems/group-anagrams
function groupAnagrams(strs: string[]): string[][] {
        let MyMap=new Map<string,number> ();
        let answer:string[][]=[];
        for(let word of strs){
            let temp=word.split("").sort().join("");
            if(MyMap.has(temp)){
                answer[MyMap.get(temp)].push(word);
            }
            else{
                MyMap.set(temp,answer.length);
                answer.push([word]);
            }
        }
        return answer;
};
