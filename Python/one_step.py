import math

def add_patch():
    # Write the code that goes here
    math.log100 = lambda num : math.log(num,100)

add_patch()      
print(math.log100(10))
# class MovingTotal:

#     def __init__(self):
#       self.numbers = []
#       self.totals = []

#     def append(self, numbers):
#         """
#         :param numbers: (list) The list of numbers.
#         """
        
#         for num in numbers:
#            self.numbers.append(num)
        
#         self.totals = []

#         left = 0
#         right = 3
    
#         while(right <= len(self.numbers)):
#           sum = 0
#           for num in range(left,right):
#             sum += self.numbers[num]

#           self.totals.append(sum)
#           right += 1
#           left += 1

#     def contains(self, total):
#         """
#         :param total: (int) The total to check for.
#         :returns: (bool) If MovingTotal contains the total.
#         """
#         return True if(self.totals.count(total) > 0) else False
    
# if __name__ == "__main__":
#     movingtotal = MovingTotal()
    
#     movingtotal.append([1, 2, 3, 4])
#     print(movingtotal.contains(6))
#     print(movingtotal.contains(9))
#     print(movingtotal.contains(12))
#     print(movingtotal.contains(7))
    
#     movingtotal.append([5])
#     print(movingtotal.contains(6))
#     print(movingtotal.contains(9))
#     print(movingtotal.contains(12))
#     print(movingtotal.contains(7))

# class CropRatio:

#     def __init__(self):
#         self._crops = {}
#         self._total_weight = 0

#     def add(self, name, crop_weight=0):

#         if not name in self._crops:
#           self._crops[name] = 0

#         self._crops[name] += crop_weight
    
#         sum = 0
#         for weight in self._crops.values():
#             sum += weight

#         self._total_weight = sum

#     def proportion(self, name):
#         if not name in self._crops: return 0
#         return self._crops[name]/self._total_weight

# if __name__ == "__main__":
#     crop_ratio = CropRatio()
    # crop_ratio.add('Wheat', 4)
    # crop_ratio.add('Wheat', 5)
    # crop_ratio.add('Rice', 1)
    
    # print(crop_ratio.proportion('Wheat'))



# input = ["h"]
# def test():
#   lst = []
#   list.append(chr for chr in input if chr.isalpha())
#   print(lst)

# test()

# def test():
#   print([chr for chr in input if chr.isalpha()])
  
# test()