//https://leetcode.com/problems/average-of-levels-in-binary-tree
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
        let sum:number[]=[];
        let count:number[]=[];
        function dfs(level:number,node:TreeNode | null):void{
                if(node==null)return;
                if(isNaN(sum[level])){
                    count[level]=0;
                    sum[level]=0;
                }
                count[level]++;
                sum[level]+=node.val;
                dfs(level+1,node.left);
                dfs(level+1,node.right);
        }
        dfs(0,root);
        for(let i=0;i<sum.length;i++){
            sum[i]/=count[i];
        }
        return sum;
};
