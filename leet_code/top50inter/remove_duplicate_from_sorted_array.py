"""
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

to remove duplicates from a sorted arr there's a trick with a 2 sized backwards window from current element
we start moving from first element as always unique
we keep a pointer to write in the array starting with: 1

we go [before,current], if they are not the same, we take the current and write it at k 
increase k, e.g. from 1 gets 2, writing at the third position

example

[1,1,2,3] k=1,i=1, window [1,1], we ignore increase i
[1,1,2,3] k=1,i=2 window [1,2], we see that 1 and 2 are diff, we take 2 and write at k which is 1
new arr [1,2,2,3], overwriting is no problem as we eliminate duplicate, as they were ignored in the prev step
[1,2,2,3] k=2, i=3, window [2,3], take 3 and write at k
new arr [1,2,3,3], k = 3

we return k as new length of arr to cut off the last el [1,2,3]

k is the new length of the array with removed duplicates
"""

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 1

        for i in range(1,len(nums)):
            if nums[i] != nums[i - 1]:
                nums[k] = nums[i]
                k += 1
        
        return k
    


"""
soltuion with memory usage,
this problem is solved using write index, cuz it doesnt matter if overwrite duplicates as we want to remove them

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        seen = set()
        write_index = 0

        for num in nums:
            if num not in seen:
                nums[write_index] = num
                seen.add(num)
                write_index += 1
        
        return write_index
"""