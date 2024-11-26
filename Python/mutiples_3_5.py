
def sumMultiples(n):
  sum = 0
  for x in range(0,n + 1):
    if(x % 3 == 0 or x % 5 == 0): sum += x 
  
  return sum

print(sumMultiples(10))