//https://leetcode.com/problems/find-the-distance-value-between-two-arrays
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
        let answer=0;
        for(let a of arr1){
            let k:boolean=true;
            for(let b of arr2){
                if(Math.abs(a-b)<=d)k=false;
            }
            (k==true)? answer+=1:answer+=0;
        }
        return answer;
};
