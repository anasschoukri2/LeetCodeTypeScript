//https://leetcode.com/problems/sorting-the-sentence
function sortSentence(s: string): string {
    function helper1(p:string):string{
        let r="";
            for(let i=0;i<p.length;i++){
                let o=p.charCodeAt(i);
                if(o>="0".charCodeAt(0)&&o<="9".charCodeAt(0)){
                    console.log(r);
                    return r;
                }
                r+=p[i];
            }
            return r;
    }
    function helper(p:string):number{
            let r="";
            for(let i=0;i<p.length;i++){
                let o=p.charCodeAt(i);
                if(o>="0".charCodeAt(0)&&o<="9".charCodeAt(0)){
                    r+=p[i];
                }
            }
            return +r;
        }
    let y=s.split(" ").sort((a:string,b:string)=>{
        return helper(a)-helper(b);
    });
    for(let i=0;i<y.length;i++){
        y[i]=helper1(y[i]);
    }
    return y.join(" ");
    
    
};
