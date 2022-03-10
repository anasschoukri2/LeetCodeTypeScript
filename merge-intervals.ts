/*https://leetcode.com/problems/merge-intervals/*/

function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a:number[],b:number[])=>{return a[0]-b[0];});
    let ans =[];
    ans.push(intervals[0]);
    let i = 0,j=1;
    while(j < intervals.length){
        while(j < intervals.length && intervals[j][0] <= ans[i][1]){
           ans[i]=[Math.min(ans[i][0], intervals[j][0]),Math.max(intervals[j][1],ans[i][1])];
           j++;
        }            
        if(intervals[j]) ans.push(intervals[j]);
        i++,j++;
    }
        return ans;

}
