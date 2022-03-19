//https://leetcode.com/problems/determine-if-string-halves-are-alike
function halvesAreAlike(s: string): boolean {
    let v=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vow=0;
    for(let i=0;i<s.length;i++){
        for(let j=0;j<v.length;j++){
            if(v[j]===s[i]){
                console.log(v[j]);
                vow++;
                break;
            }
        }
    }
    let y=0;
    for(let i=0;i<s.length/2;i++){
        for(let j=0;j<v.length;j++){
            if(v[j]===s[i]){
                console.log(v[j]);
                y++;
                break;
            }
        }
    }
    console.log(vow);
    return 2*y==vow;
};
