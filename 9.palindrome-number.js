/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (42.41%)
 * Total Accepted:    533.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 1221
 * 12221
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x)=> {
  if(x==0){
    return true
  }
  else
  {
    if(x<0||(x%10)==0)
    {
        return false;
    }
    else{
      const anArray=[];
      for (let i=10;x>0;i=i*1)
      {
         anArray.push(x%i);
         x=parseInt(x/i);
      }
      
      var judge=0;
      var magic=0;
       for(let m=0,n=anArray.length-1;m<parseInt(anArray.length/2);m++,n--) 
             {
                magic=anArray[m]-anArray[n];
                 if(magic)
                {
                  judge++
                }
            } 
            if(judge){
                 return false;
            }else{
                return true;
            }
      
    }    
  }
  
  };
  

