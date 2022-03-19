//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let ans:boolean[]=[];
    let maxi=0;
    for(let i=0;i<candies.length;i++){
        maxi=Math.max(maxi,candies[i]);
    }
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=maxi){
            ans.push(true);
        }
        else {
            ans.push(false);
        }
        
    }
    return ans;
};
