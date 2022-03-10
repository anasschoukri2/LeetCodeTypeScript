/*https://leetcode.com/problems/string-to-integer-atoi/*/
function myAtoi(s: string): number {
  let MyNumber=parseInt(s);
  if (Number.isNaN(MyNumber)) return 0;
  if (MyNumber<Math.pow(-2,31)) return Math.pow(-2,31);
  if (MyNumber>Math.pow(2,31)-1) return Math.pow(2, 31)-1;
  return MyNumber;
};
