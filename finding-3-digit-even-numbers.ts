//https://leetcode.com/problems/finding-3-digit-even-numbers
function findEvenNumbers(digits: number[]): number[] {
    let MyMap=new Map<number,number> ()
    for(let i=0;i<=9;i++){
        MyMap.set(i,0);
    }
    for(let o of digits){
       MyMap.set(o,MyMap.get(o)+1);
    }
    let ans:number[]=[];
    function solve(i:number ,S:string){
        if(i==2){
            
            for(let j=0;j<10;j+=2){
                if(MyMap.get(j)>0){
                    let p=S;
                    p+=j.toString();
                   
                    ans.push(+p);
                }
            }
            return ; 
        }
        for(let j=0;j<10;j++){
            if(i==0&&j==0)continue;
            if(MyMap.get(j)>0){
                MyMap.set(j,MyMap.get(j)-1);
                solve(i+1,S+j.toString())
                MyMap.set(j,MyMap.get(j)+1);
            }
        }
    }
    solve(0,"");
    return ans;
};
