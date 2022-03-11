//https://leetcode.com/problems/next-greater-element-i
class stack{
    private A:number[];
    private index:number;
    constructor(){
        this.A=[];
        this.index=0;
    }
    push(element:number){
        this.A[this.index]=element;
        this.index++;
    }
    pop(){
        if(this.index==0)return undefined;
        this.index--;
        return this.A[this.index];
    }
    getsize(){
        return this.index;
    }
}
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let exist=new Map<number,boolean>();
        let s= new stack();
        for(let a of nums2){
                exist.set(a,true);
                s.push(a);
        }
        let ans:number[]=[];
        for(let a of nums1){
            let y=-1;
            if(exist.get(a)==true){
                let  poped:number;
                do{ 
                    poped=s.pop();
                   // console.log("searching "+a+" poping "+poped+" max "+y+" stack Size "+s.getsize());
                    if(poped==undefined){
                      break;
                    }  
                    exist.set(poped,false);
                    if(poped>a)
                        y=poped;
                }
                while(poped!=a);
                for(let i=s.getsize();i<nums2.length;i++){
                    let b=nums2[i];
                    exist.set(b,true);
                    s.push(b);
                }
            }
            else{
                let check=false;
                for(let i=s.getsize();i<nums2.length;i++){
                    let b=nums2[i];
                    exist.set(b,true);
                    s.push(b);
                    console.log("searching "+a+" pushing "+b+" max "+y+" stack Size "+s.getsize());
                    if(check&&b>a&&y==-1){
                          y=b;
                          
                    }
                    if(b==a)check=true;
                }
                
            }
            ans.push(y);
        }
        return ans;
};
