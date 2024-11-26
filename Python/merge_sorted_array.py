

class Solution:
    def merge(self, nums1, m, nums2, n) :
        print(type({}))
        for j in range(n):
            nums1[m+j]=nums2[j]
        nums1.sort()   

mySolution = Solution()
print(mySolution.merge([1,2,3,0,0,0],3,[2,5,6],3))