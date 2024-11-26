def areAnagrams(str1,str2):

  #check for equal length strings
  if(len(str1) != len(str2)): return False
  #make strings case insenstive
  #sort both strings in descending order
  str1Sorted = sorted(str1.casefold())
  str2Sorted = sorted(str2.casefold())

  #loop through strings and compare values
    #if values dont match return false 
  for i in range(len(str1Sorted)):
    if(str1Sorted[i] != str2Sorted[i]): return False 

  #if loop exits without returning false return true
  return True