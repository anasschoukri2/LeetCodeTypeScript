//https://leetcode.com/problems/valid-sudoku
function isValidSudoku(board: string[][]): boolean {
    function checkminisquare(x:number,y:number):boolean{
        let exist:number[]=[];
        for(let i=0;i<10;i++)exist.push(0);
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                let yy=+board[x+i][y+j];
                if(yy!=NaN){
                    exist[yy]++;
                }
            }
        }
        for(let i=0;i<10;i++){
            if(exist[i]>1)return false;
        }
        return true; 
    }
    function checkline(x:number):boolean{
        let exist:number[]=[];
        for(let i=0;i<10;i++)exist.push(0);
        for(let i=0;i<9;i++){
                let yy=+board[x][i];
                if(yy!=NaN){
                    exist[yy]++;
                }
            }
        
        for(let i=0;i<10;i++){
            if(exist[i]>1)return false;
        }
        return true; 
    }
    function checkcolumn(y:number):boolean{
        let exist:number[]=[];
        for(let i=0;i<10;i++)exist.push(0);
        for(let i=0;i<9;i++){
                let yy=+board[i][y];
                if(yy!=NaN){
                    exist[yy]++;
                }
            }
        
        for(let i=0;i<10;i++){
            if(exist[i]>1)return false;
        }
        return true;
    }
    for(let i=0;i<9;i++){
        if(!checkline(i)||!checkcolumn(i))return false;
    }
    let possible=[[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
    for(let y of possible){
        if(!checkminisquare(y[0],y[1]))return false;
    }
return true;
};
