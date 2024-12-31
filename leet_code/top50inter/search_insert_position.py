"""
we are given a sorted array and we search for a target return its index,
if the target is not found
return the the index where it would be inserted
solved with binary search

lo always points to the insertion index if the target is not found
hi doesnt cuz it moves backwards and overshoots the index

"""

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lo = 0
        hi = len(nums) - 1

        while lo <= hi:
            mid = lo + (hi - lo) // 2

            if nums[mid] == target:
                return mid

            if target > nums[mid] :
                lo = mid + 1
            else:
                hi = mid - 1

        return lo



