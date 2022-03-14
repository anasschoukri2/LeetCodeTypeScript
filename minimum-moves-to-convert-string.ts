//https://leetcode.com/problems/minimum-moves-to-convert-string
function minimumMoves(s: string): number {
    let ans=0;
    let p=s.split("");
    for(let i=0;i<s.length;i++){
        if(p[i]=='X'){
            ans++;
            for(let j=0;j<3&&j+i<p.length;j++){
                p[i+j]='O';
            }
        }
    }
    return ans;
};
