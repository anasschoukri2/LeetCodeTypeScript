//https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
class stack{
    private mys:string[];
    pointer=0; 
    constructor(){
        this.mys=[];
    }
    push(a:string):void{
            this.mys[this.pointer]=a;
            this.pointer+=1;
    }
    pop():string{
        this.pointer--;
        return this.mys[this.pointer];
    }
    isEmpty():boolean{
        return this.pointer===0;
    }
    size():number{
        return this.pointer;
    }
}
function maxDepth(s: string): number {
        let S=new stack();
        let ans=0;
        for(let i=0;i<s.length;i++){
            let b=s[i];
        
            if(b=='('){
                S.push(b);
                ans=Math.max(S.size(),ans);
            }
            if(b==')'){
                S.pop();  
            } 
            
        }
        return ans;
};
