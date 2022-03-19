//https://leetcode.com/problems/count-good-triplets
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let ans=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(Math.abs(arr[i]-arr[j])<=a&&Math.abs(arr[k]-arr[j])<=b&&Math.abs(arr[i]-arr[k])<=c){
                    ans++;
                }
            }
        }
    }
    return ans;
};
