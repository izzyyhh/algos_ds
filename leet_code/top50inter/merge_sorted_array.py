class Solution(object):
    def merge(self, nums1, m, nums2, n):
        slot = m + n - 1
        mPointer = m - 1
        nPointer = n - 1
        if m == 0:
            for i in range(len(nums2)):
                nums1[i] = nums2[i]
        elif n == 0:
            return

        while slot >= 0 and mPointer >= 0 and nPointer >= 0:
            if nums1[mPointer] > nums2[nPointer]:
                nums1[slot] = nums1[mPointer]
                mPointer -= 1
            else:
                nums1[slot] = nums2[nPointer]
                nPointer -= 1
                print(nPointer)
                print(nums2[nPointer])
            slot -= 1
        
        if mPointer < 0:
            while slot >= 0:
                nums1[slot] = nums2[nPointer]
                nPointer -= 1
                slot -= 1

        

"""
my solution from end to beginning, one of the pointers will deplete
and then just add the n-array to the beginning if mpointer depleted left

improved solution below, just deplete n pointer, as m array is in front and sorted
"""

class Solution(object):
    def merge(self, nums1, m, nums2, n):
        slot = m + n - 1
        mPointer = m - 1
        nPointer = n - 1
        if m == 0:
            for i in range(len(nums2)):
                nums1[i] = nums2[i]
        elif n == 0:
            return

        while nPointer >= 0:
            if mPointer >= 0 and nums1[mPointer] > nums2[nPointer]:
                nums1[slot] = nums1[mPointer]
                mPointer -= 1
            else:
                nums1[slot] = nums2[nPointer]
                nPointer -= 1
            slot -= 1

        