"""
https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150

my idea is, go through every char of string, if is opening push to stack and if u encounter closing, pop from stack as check if they match

"""
class Solution:
    def isValid(self, s: str) -> bool:
        opening = ['(', '[', '{']
        closing = [')', ']', '}']
        stack = []

        for c in s:
            if c in opening:
                stack.append(c)
            print(c in closing and len(stack) > 0)
            if c in closing and len(stack) is 0:
                return False
            if c in closing and len(stack) > 0 and opening.index(stack.pop()) is not closing.index(c):
                return False

        if len(stack) > 0:
            return False
        return True 
        
            
"""

revised version, with a dict to map closing to opening, and a stack to keep track of opening
if we encounter a closing, we pop from stack and check if they match, if not return False
if stack is empty and we encounter a closing, return False

"""
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')':'(', ']':'[', '}':'{'}
        
        for c in s:
            if c in mapping.values():
                stack.append(c)
            elif c in mapping.keys():
                if len(stack) is 0:
                    return False
                if mapping[c] is not stack.pop():
                    return False
        
        if len(stack) > 0:
            return False
        return True
    
"""

recursive version
base case: If the string is empty or doesn't contain valid pairs, return it
if no changes were made, return the string
if the string reduces to an empty string, it is valid

what does s.replace do?
it replaces all occurrences of a substring with another substring
but how it able to find all pairs that go beyond 1 level of nesting?
because it is recursive, it keeps calling itself until there are no pairs to replace
"""
class Solution:
    def isValid(self, s: str) -> bool:
        def remove_pairs(s: str) -> str:
            if not s:
                return s
            new_s = s.replace("()", "").replace("{}", "").replace("[]", "") # removing pairs, if its nested it will keep calling itself and eventually remove all pairs
          
            if new_s == s: # no changes were made
                return new_s
    
            return remove_pairs(new_s) # recursive call, does it until no pairs are found
        
     
        return remove_pairs(s) == ""