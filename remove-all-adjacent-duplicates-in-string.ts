//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string
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
    top():string{
        return  this.mys[this.pointer-1];
    }
    size():number{
        return this.pointer;
    }
}
function removeDuplicates(s: string): string {
    let answer="";
    let S=new stack();
    
    for(let i=0;i<s.length;i++){
        if(S.isEmpty()){
            S.push(s[i]);
            continue;
        }
        let b=S.top();
        if(b===s[i]){S.pop();continue;}
        S.push(s[i]);
    }
    //console.log(S.top());
    while(!S.isEmpty()){
        answer+=(S.pop());
    }
    return answer.split("").reverse().join("");

};
