// https://leetcode.com/problems/valid-parentheses/submissions/1302799856/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

function validParanthesis(str){
let stack=[];    
let flag=false;
let matchingBracket={
    ')':'(',
    ']':'[',
    '}':'{'
}
    for(char of str){
        if(char=='[' || char=='{' || char=='('){
            stack.push(char);
        }
        else if(char==']' || char=='}' || char==')')
            if(stack.length===0 || stack.pop() !== matchingBracket[char]){
                return false;
            }
        }
    

        return stack.length==0;
        
}

console.log(validParanthesis('()[]{}'));