//https://leetcode.com/problems/count-square-sum-triples
function countTriples(n: number): number {
        let ans=0;
        for(let i=1;i<=n;i++){
            for(let j=1;i*i+j*j<=n*n;j++){
                if(Math.floor(Math.sqrt(i*i+j*j))==Math.ceil(Math.sqrt(i*i+j*j))){
                    console.log(i+" "+j+" "+Math.sqrt(i*i+j*j));
                    ans++;
                }
            }
        }
    return ans;
};
