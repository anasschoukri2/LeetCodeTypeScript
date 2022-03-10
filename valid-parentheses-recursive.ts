
//https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean
{
    let position = 0;
    let MyMap = new Map<string, string>();
    MyMap.set('(', ')');
    MyMap.set('[', ']');
    MyMap.set('{', '}');

    function helper(s: string,char: string):boolean{
        if (position == = s.length && char =='')
            return true;
        if (MyMap.has(s[position])) {
            position++;
            console.log(s[position - 1] + "enter");
            let y = helper(s, MyMap.get(s[position - 1]));
            return (y && helper(s, char));
        }
        else {
            if (s[position] == char) {
                console.log(s[position] + "quit");
                position++;
                return true;
            }
            console.log(s[position] + "didnt manage to quit");
            return false;
        }
        console.log(s[position] + "weird");
        return false;
    }
    return helper(s,'');
};
