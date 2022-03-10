//https://leetcode.com/problems/reshape-the-matrix
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if(r*c!=mat[0].length*mat.length)return mat;
    let answer:number[][]=[];
    let row:number[]=[];
    let i=0,j=0;
    for(let a of mat){
        for(let b of a){
            i++;
            row.push(b);
            if(i==c){
                
                answer.push(row);
                i=0;
                j++;
                row=[];
            }
            
        }
    }
    return answer;
};
