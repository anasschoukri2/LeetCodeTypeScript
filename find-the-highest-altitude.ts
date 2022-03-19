//https://leetcode.com/problems/find-the-highest-altitude
function largestAltitude(gain: number[]): number {
    let maxi=0;
    let at=0;
    for(let i=0;i<gain.length;i++){
        at+=gain[i];
        maxi=Math.max(maxi,at);
    }
    return maxi;
};
