"""
https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

ransom note and magazine, check if ransom note can be build by letters given by magazine

easy with hashmap
intial solution
"""

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        mag = {}

        for c in magazine:
            if c in mag:
                mag[c] = mag[c] + 1
            else:
                mag[c] = 1

        for c in ransomNote:
            if c not in mag:
                return False
            if mag[c] is 0:
                return False
            else:
                mag[c] = mag[c] - 1

        return True




"""
other solution with Counter from collections which is very short
"""

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomC = Counter(ransomNote)
        magC = Counter(magazine)
        return magC >= ransomC

