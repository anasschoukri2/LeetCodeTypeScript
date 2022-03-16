//https://leetcode.com/problems/sum-of-all-odd-length-subarrays
function sumOddLengthSubarrays(arr: number[]): number {
    let ans=0;
    let o=1;
    while(o<=arr.length){
        for(let i=0;i<arr.length;i++){
            
            if(i+o<=arr.length){
                let y:number[]=[];
                for(let j=i;j<i+o;j++){
                    ans+=arr[j];
                    y.push(arr[j]);
                }
                console.log(y);
            }

        }
        o+=2;
    }
    return ans;
};
