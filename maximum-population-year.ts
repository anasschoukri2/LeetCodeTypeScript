//https://leetcode.com/problems/maximum-population-year
function maximumPopulation(logs: number[][]): number {
    let bc= new Map<number,number>();
    let dc= new Map<number,number>();
    for(let i=1950;i<=2050;i++){
        bc.set(i,0);
        dc.set(i,0);
    }
    for(let a of logs){ 
        bc.set(a[0],bc.get(a[0])+1)
        dc.set(a[1],dc.get(a[1])+1)
    }
    let ans=-1;
    let maxalive=0;
    let alive=0;
    for(let i=1950;i<=2050;i++){
        
        alive+=bc.get(i)-dc.get(i);
       
        if(alive>maxalive){
            ans=i;
            maxalive=alive;
        }
    }
    return ans;
};
