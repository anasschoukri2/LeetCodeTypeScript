//https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros
function checkZeroOnes(s: string): boolean {
    let maxz=0;
    let maxo=0;
    let one=(s[0]=='1');
    let countz=0;
    
    let counto=0;
    if(s[0]=='1'){
        counto=1;
    }
    else countz=1;
    for(let i=1;i<s.length;i++){
        if(one){
            if(s[i]=='1')
                counto++;
            else{
                maxo=Math.max(counto,maxo);
                counto=0;
                countz=1;
                one=false;
            }
        }
        else{
            if(s[i]!='1')
                countz++;
            else{
                maxz=Math.max(countz,maxz);
                countz=0;
                counto=1;
                one=true;
            }
        }
    }
    maxz=Math.max(countz,maxz);
    maxo=Math.max(counto,maxo);
    console.log(maxo+" "+maxz);
    return maxo>maxz;
};
