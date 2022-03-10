https://leetcode.com/problems/valid-parentheses/
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
function isValid(s: string): boolean {
        let MyMap= new Map <string,string>();
        MyMap.set('(',')');
        MyMap.set('[',']');
        MyMap.set('{','}');
        let Mystack=new stack();
        for(let i=0;i<s.length;i++){
            let t=s[i];
            if(MyMap.has(t)){
                Mystack.push(t);
            }
            else{
                if (Mystack.isEmpty())return false;
                let y=Mystack.pop();
                
                if(MyMap.get(y)!==t)return false;
                console.log(y+" "+t);
            }
        }
        return Mystack.isEmpty();
};
