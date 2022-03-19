//https://leetcode.com/problems/flipping-an-image
function flipAndInvertImage(image: number[][]): number[][] {
    let ans:number[][]=[];
    for(let i=0;i<image.length;i++){
        let row:number[]=[];
        for(let j=image.length-1;j>=0;j--){
            if(image[i][j]==1)
            row.push(0);
            else row.push(1);
        }
        ans.push(row);
    }
    return ans;
};
