/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.22%)
 * Total Accepted:    637.2K
 * Total Submissions: 2.5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 const fix=(x)=>{
        return x.toString().split("").reverse().join("");
    }

   if(x>-2147483648
    &&x<2147483647
    )
   {
    if(x>0)
    {
    // const thisIsString=x.toString().split("").reverse().join("");
    const result=parseInt(fix(x));
    if(result>-2147483648
        &&result<2147483647){
            return result;
        }else{
            return 0;
        }
    
    }
    else
    {
    x=x*(-1);
    // const thisIsString=x.toString().split("").reverse().join("");
    const result=parseInt(fix(x))*(-1);
    if(result>-2147483648
        &&result<2147483647){
            return result;
        }else{
            return 0;
        }
    }
   }
   else
   {
       return 0;
    };
    
};

