"""
pretty straight forward with a hash table
just save index of seen elements and
check if the current element is within k distance
"""

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        h = {}

        for i, el in enumerate(nums):
            if el in h and abs(h[el] - i) <= k:
                return True
            else:
                h[el] = i
        
        return False
                
        