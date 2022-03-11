//https://leetcode.com/problems/remove-outermost-parentheses
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
function removeOuterParentheses(s: string): string {
        let S=new stack();
        let ans="";
        for(let i=0;i<s.length;i++){
            let b=s[i];
            if(b==')'){
              S.pop();  
            } 
            console.log(S.size());
            if(S.isEmpty()){
                if(b=='(')
                    S.push(b);
                continue;
            }
            if(b=='(')
                    S.push(b);
            ans+=b;
             console.log(b);
        }
        return ans;
};
